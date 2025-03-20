const express = require("express");
const interviewController = require("../controllers/interview.controller");
const uploadeMiddleware = require("../middlewares/upload.middleware");

const interviewRouter = express.Router();

interviewRouter
    .get("/questions", 
        uploadeMiddleware.upload.single('cv'),
        interviewController.parseCV,
        interviewController.getQuestions
    );
    
interviewRouter
    .get("/evaluation", interviewController.evaluateAnswers);

module.exports = interviewRouter;
