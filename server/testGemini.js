import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.GEMINI_API_KEY;

console.log("Testing gemini-2.5-flash...");

async function test() {
    const url = `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;
    
    const body = {
        contents: [{
            parts: [{
                text: "Say hello in one word"
            }]
        }]
    };
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
        
        const data = await response.json();
        
        if (data.candidates) {
            console.log("✅ SUCCESS! Response:", data.candidates[0].content.parts[0].text);
        } else {
            console.log("❌ FAILED. Response:", JSON.stringify(data, null, 2));
        }
    } catch (error) {
        console.error("ERROR:", error.message);
    }
}

test();
