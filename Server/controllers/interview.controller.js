const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const prompts = require('../utils/prompts');
const askGemini = require('../utils/askGemini');
const parsePDF = require('../utils/parsePDF');

exports.getQuestions = catchAsync(async (req, res, next) => {
    const { role, job, company, industry } = req.body;
    const cvText = req.cvText;

    if (!role && !job && !cvText && !company && !industry) {
        return next(new AppError('Please provide at least one of the following: role, job description, or CV text.', 400));
    }

    let embededText = [role, job, company, industry, cvText]
    .reduce((acc, info) => acc + (info ? `cv: ${cvText}` : ''), '');


    let prompt = prompts.INTERVIEW_QUESTIONS_PROMPT
        .replace('<EMBEDED_TEXT>', embededText);

    const questions = JSON.parse( await askGemini.ask(prompt) );

    return res.status(200).json({
        status: 'success',
        data: {
            questions
        }
    });
});

exports.evaluateAnswers = catchAsync(async (req, res, next) => { 
    const interview = JSON.stringify(req.body.interview || {});

    if (!interview) {
        return next( new AppError(`Please provide the interview's Q&A to evaluate.`, 400) );
    }

    const prompt = prompts.INTERVIEW_EVALUATION_PROMPT.replace('<INTERVIEW_TRANSCRIPT>', interview);

    const evaluation = JSON.parse( await askGemini.ask(prompt) );

    return res.status(200).json({
        status: 'success',
        data: {
            evaluation
        }
    });
});



exports.parseCV = catchAsync(async (req, res, next) => {
    req.cvText = await parsePDF(req.file);
    next();
});
