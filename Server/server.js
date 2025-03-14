require('dotenv').config({ path: './env' });
// require('./db.js')();
const app = require('./app');

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}...`);
});