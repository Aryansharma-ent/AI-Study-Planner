import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.GEMINI_API_KEY;

async function testModel(modelName) {
    console.log(`\nTesting ${modelName}...`);
    const url = `https://generativelanguage.googleapis.com/v1/models/${modelName}:generateContent?key=${API_KEY}`;
    
    const body = {
        contents: [{
            parts: [{
                text: "Return only this JSON: {\"test\": \"success\"}"
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
            console.log(`✅ ${modelName} WORKS!`);
            console.log("Response:", data.candidates[0].content.parts[0].text);
            return true;
        } else {
            console.log(`❌ ${modelName} FAILED:`, data.error?.message || JSON.stringify(data));
            return false;
        }
    } catch (error) {
        console.error(`❌ ${modelName} ERROR:`, error.message);
        return false;
    }
}

async function main() {
    const models = [
        'gemini-2.5-flash',
        'gemini-1.5-flash',
        'gemini-1.5-pro',
        'gemini-pro'
    ];
    
    for (const model of models) {
        await testModel(model);
    }
}

main();
