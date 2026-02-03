import Plan from "../Models/PlanModel.js"
import AsyncHandler from 'express-async-handler'



// @GET request
export const getPlans = AsyncHandler(async(req,res) =>{
     const Plans = await Plan.find();
     res.json(Plans);
})

//@GET request with ID
export const getPlan = AsyncHandler(async(req,res) => {
   const plan = await Plan.findById(req.params.id);

   if(!plan){
     res.status(400)
     throw new Error("Plan does not exist!");
   }
    
   res.status(200).json(plan);

})




// @POST AI Generation - Generate study plan with Gemini AI
export const generatePlan = AsyncHandler(async(req, res) => {
    const {title, hoursperday, durationDays, subjects, weakAreas, level} = req.body;

  
    if(!title || !hoursperday || !durationDays || !subjects || !level){
        res.status(400)
        throw new Error("Please provide all required fields");
    }

 
    const totalWeeks = Math.ceil(durationDays / 7);



    const prompt = `You are an expert study plan generator. Create a detailed ${durationDays}-day study plan based on:

Title: ${title}
Hours per day: ${hoursperday}
Duration: ${durationDays} days (${totalWeeks} weeks)
Subjects: ${Array.isArray(subjects) ? subjects.join(', ') : subjects}
Weak areas to focus on: ${Array.isArray(weakAreas) && weakAreas.length > 0 ? weakAreas.join(', ') : 'None'}
Skill level: ${level}

Return ONLY valid JSON in this EXACT structure (no markdown, no extra text):
{
  "weeklyPlan": [
    {
      "week": 1,
      "days": [
        {
          "day": "Day 1",
          "topic": "Topic Name",
          "subtopics": ["Subtopic 1", "Subtopic 2", "Subtopic 3"],
          "hours": ${hoursperday}
        }
      ]
    }
  ]
}

IMPORTANT REQUIREMENTS:
1. Create exactly ${totalWeeks} weeks
2. Each week has 7 days (Days 1-7, 8-14, etc.)
3. Each day must have: day, topic, subtopics (array of 2-4 items), hours
4. Distribute all subjects: ${Array.isArray(subjects) ? subjects.join(', ') : subjects}
5. Give EXTRA focus to weak areas: ${Array.isArray(weakAreas) && weakAreas.length > 0 ? weakAreas.join(', ') : 'None'}
6. Adjust difficulty based on ${level} level
7. Include practice days (Day 6 of each week)
8. Include rest days (Day 7 of each week) with reduced hours (2 hours)
9. Make topics progressive - basics first, then advanced
10. Return ONLY the JSON object, nothing else`;

    try {
        console.log("Starting AI generation...");
        console.log("API Key available:", !!process.env.GEMINI_API_KEY);
        

        const url = `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;
        
        const aiResponse = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }]
            })
        });
        
        const aiData = await aiResponse.json();
        console.log("AI responded");
        
        if (!aiData.candidates || !aiData.candidates[0]) {
            console.error("AI Error:", aiData);
            res.status(500);
            throw new Error("AI failed to generate content");
        }
        
        const text = aiData.candidates[0].content.parts[0].text;
        console.log("Raw AI response:", text.substring(0, 200) + "...");
        
     
        let generatedPlan;
        try {

            let cleanText = text.trim();
            
         
            cleanText = cleanText.replace(/^```json\s*/i, '').replace(/^```\s*/, '');
            cleanText = cleanText.replace(/\s*```$/, '');
            cleanText = cleanText.trim();
            
            console.log("Cleaned text preview:", cleanText.substring(0, 100));
            
            generatedPlan = JSON.parse(cleanText);
            console.log("JSON parsed successfully");
        } catch (parseError) {
            console.error("Parse error:", parseError.message);
            console.error("Failed text:", text.substring(0, 500));
            res.status(500);
            throw new Error("AI returned invalid JSON. Please try again.");
        }

        if(!generatedPlan.weeklyPlan || !Array.isArray(generatedPlan.weeklyPlan)){
            console.error("Invalid structure:", generatedPlan);
            res.status(500);
            throw new Error("AI response missing weeklyPlan array");
        }

        console.log("Saving to database...");
     
        const newPlan = await Plan.create({
            title,
            hoursperday,
            durationDays,
            subjects: Array.isArray(subjects) ? subjects : [subjects],
            weakAreas: Array.isArray(weakAreas) ? weakAreas : (weakAreas ? [weakAreas] : []),
            level,
            generatedPlan: generatedPlan
        });

        console.log("Plan saved successfully!");
        res.status(201).json(newPlan);

    } catch (error) {
        console.error("Full error:", error);
        res.status(500);
        throw new Error(`AI Generation failed: ${error.message}`);
    }
})