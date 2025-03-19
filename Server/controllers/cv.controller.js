const fs  = require("fs");
const path  = require("path");
const multer = require("multer");

const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const prompts = require("../utils/prompts");
const askGemini = require("../utils/askGemini");

exports.analyseCV = catchAsync(async (req, res, next) => {
    if (!req.file) {
        return next( new AppError(`No file uploaded.`, 400) );
    }

    const filePath = req.file.path;

    const feadback = JSON.parse( await askGemini.getFeadBack(filePath, prompts.CV_ANALYSIS_PROMPT) );

    fs.unlinkSync(filePath);     // Delete the uploaded file after processing
    
    if (!feadback) {
        return next( new AppError('Failed to extract text from CV', 400) );
    }
    
    res.status(200).json({
        status: 'success', 
        data: {
            feadback
        }
    });
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



