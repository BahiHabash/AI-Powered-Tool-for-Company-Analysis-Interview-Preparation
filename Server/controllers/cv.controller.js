const fs  = require("fs");
const path  = require("path");
const { Readable } = require("stream");
const multer = require("multer");

const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const cvParser = require("../utils/cvParser");

exports.analyseCV = catchAsync(async (req, res, next) => {
    if (!req.file) {
        return next( new AppError(`No file uploaded.`, 400) );
    }

    const filePath = req.file.path;
    const extractedText = await cvParser.extractTextFromCV(filePath); // Extract raw text from the CV
console.log('afrer calling: ', extractedText)
    // Delete the uploaded file after processing
    fs.unlinkSync(filePath);
    
    if (!extractedText) {
        return next( new AppError('Failed to extract text from CV', 400) );
    }

    // Stream response as a downloadable JSON file
    const jsonStream = new Readable();
    jsonStream.push( JSON.stringify({ text: extractedText }, null, 4) );
    jsonStream.push(null);

    res.setHeader("Content-Disposition", 'attachment; filename="cv_extracted_text.json"');
    res.setHeader("Content-Type", "application/json");
    jsonStream.pipe(res);
});



// Configure multer to store files in the 'uploads' directory
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '..', 'Data', 'uploads')); // Ensure this path is correct
    },
    filename: (req, file, cb) => {
        const fileExt = path.extname(file.originalname); // Get file extension
        cb(null, `cv-${Date.now()}-${Math.trunc(Math.random() * 10e5)}${fileExt}`);
    },
});

exports.upload = multer({ storage });
