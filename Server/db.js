const mongoose = require('mongoose');

const db = process.env.DATABASE_URL.replace('<db_password>', process.env.DATABASE_PASSWORD);

mongoose
    .connect(db)
    .then(() => console.log('✅ DB connected successfully...'))
    .catch(() => console.log('❌ DB tailed to connect...'));