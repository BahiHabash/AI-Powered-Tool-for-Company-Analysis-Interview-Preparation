const fs = require("fs");
const axios = require("axios");
const FormData = require("form-data");

const API_KEY = process.env.OCR_SPACE_API_KEY;

exports.extractTextFromCV = async function (filePath) {
    console.log("Function called with filePath:", filePath);

    try {
        const fileBuffer = fs.readFileSync(filePath);

        const formData = new FormData();
        formData.append("apikey", API_KEY);
        formData.append("language", "eng");
        formData.append("isOverlayRequired", "false");
        formData.append("isCreateSearchablePdf", "false");
        formData.append("file", fileBuffer, filePath);

        const response = await axios.post("https://api.ocr.space/parse/image", formData, {
            headers: formData.getHeaders(),
        });

        let extractedText = "";

        response.data.ParsedResults.forEach((parsed) => {
            extractedText += parsed.ParsedText + "\n";
        });

        return extractedText;

    } catch (error) {
        console.error("Error in extractTextFromCV:", error);
        return null;
    }
};
