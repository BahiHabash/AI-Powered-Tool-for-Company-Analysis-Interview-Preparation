const mongoose = require('mongoose');

module.exports = () => () => {
    mongoose
        .connect(process.env.DATABASE_URL)
        .then(() => console.log('✅ DB connected successfully...'));
}