const mongoose = require('mongoose');

const DB = process.env.DATABASE_URL.replace('<DATABASE_PASSWORD>', process.env.DATABASE_PASSWORD);

const connectDB = async () => {
    try {
        await mongoose.connect(DB);
        console.log('✅ DB connected successfully...');
    } catch (error) {
        console.error('❌ Failed to connect to DB:', error);
    }
};

module.exports = connectDB;
