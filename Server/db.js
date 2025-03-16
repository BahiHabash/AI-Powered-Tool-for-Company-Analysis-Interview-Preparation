const mongoose = require('mongoose');

const DB = process.env.DATABASE_URL.replace('<DATABASE_PASSWORD>', process.env.DATABASE_PASSWORD);

modeule.exprts = () => {
    mongoose
        .connect(DB)
        .then(() => console.log('✅ DB connected successfully...'))
        .catch(() => console.log('❌ DB tailed to connect...'));
}