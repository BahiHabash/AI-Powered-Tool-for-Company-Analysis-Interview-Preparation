const fs = require("fs");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const prompts = require("./prompts");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

exports.ask = async function(prompt) {
    try {
        // Send to Gemini Flash
        const result = await model.generateContent(prompt);
        const feadBack = result.response.candidates[0].content.parts[0].text;
        
        return feadBack.slice(7, -4);
    } catch (error) {
        console.error("Error processing Prompt with AI:", error);
    }
}

