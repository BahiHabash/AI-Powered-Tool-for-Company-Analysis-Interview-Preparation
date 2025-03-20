const express = require("express");
const cvController = require("../controllers/cv.controller");
const uploadMiddleware = require("../middlewares/upload.middleware");

const cvRouter = express.Router();

cvRouter
    .post("/analyze", 
        uploadMiddleware.upload.single('cv'), 
        cvController.parseCV, 
        cvController.analyseCV
    );

module.exports = cvRouter;
