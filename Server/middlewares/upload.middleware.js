const multer = require("multer");

// Configure multer to store in memory
exports.upload = multer({ storage: multer.memoryStorage() });