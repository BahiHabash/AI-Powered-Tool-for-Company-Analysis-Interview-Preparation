const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const prompts = require("../utils/prompts");
const askGemini = require("../utils/askGemini");
const parsePDF = require("../utils/parsePDF");

exports.analyseCV = catchAsync(async (req, res, next) => {
    if (!req.cvText) {
        return next( new AppError(`No CV file uploaded.`, 400) );
    }

    // Combine the CV text with the user prompt
    let prompt = prompts.CV_ANALYSIS_PROMPT.replace('<CV_TEXT>', req.cvText);

    const feadback = JSON.parse( await askGemini.ask(prompt) );
    
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


exports.parseCV = catchAsync(async (req, res, next) => {
    req.cvText = await parsePDF(req.file);
    next();
});


