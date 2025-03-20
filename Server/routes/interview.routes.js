const express = require("express");
const interviewController = require("../controllers/interview.controller");
const uploadeMiddleware = require("../middlewares/upload.middleware");

const interviewRouter = express.Router();

interviewRouter
    .post("/questions", 
        uploadeMiddleware.upload.single('cv'),
        interviewController.parseCV,
        interviewController.getQuestions
    );
    
interviewRouter
    .post("/evaluation", interviewController.evaluateAnswers);

module.exports = interviewRouter;
