const pdfParse = require("pdf-parse");

module.exports = async function(dataBuffer) {
    try {
        return (await pdfParse(dataBuffer.buffer)).text;
    } catch(err) {
        return null;
    }
}

