const express = require("express");
const cvController = require("../controllers/cv.controller");

const cvRouter = express.Router();

cvRouter
    .post("/analyze", cvController.upload.single('file'), cvController.analyseCV);

module.exports = cvRouter;
