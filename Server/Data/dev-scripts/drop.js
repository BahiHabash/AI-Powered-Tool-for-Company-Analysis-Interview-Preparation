require('dotenv').config({ path: '../../.env' });
require('../../db')(); // connect to dataBase

const Company = require(`../../models/company.model`);


// delete comapines data from the database
(async () => {
    try {
        await Company.deleteMany();
        console.log('Data Deleted Successfully ✅')
    } catch (err) {
        console.log(err);
    }
    
    process.exit();
})();

