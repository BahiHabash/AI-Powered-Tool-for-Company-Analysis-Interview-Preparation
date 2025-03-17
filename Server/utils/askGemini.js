const fs = require("fs");
const path = require("path");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const pdfParse = require("pdf-parse");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

exports.getFeadBack = async function(filePath, userPrompt) {
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const parsedCV = await pdfParse(dataBuffer);
        
        // Combine the CV text with the user prompt
        let finalPrompt = process.env.GEMINI_CV_ANALYSIS_PROMPT.replace('<CV_TEXT>', parsedCV.text);
            finalPrompt = finalPrompt.replace('<PROMPT>', userPrompt);

        // Send to Gemini Flash
        const result = await model.generateContent(finalPrompt);
        const feadBack = result.response.candidates[0].content.parts[0].text;
        
        return feadBack.slice(3, -4);
    } catch (error) {
        console.error("Error processing CV with AI:", error);
    }
}