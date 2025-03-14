module.exports = (func) => {
    async (req, res, next) => {
        func(req, res, next).catch(next);
    }
}