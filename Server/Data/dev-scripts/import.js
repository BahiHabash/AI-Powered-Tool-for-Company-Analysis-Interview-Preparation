require('dotenv').config({ path: '../../.env' });
require('../../db')(); // // connect to dataBase

const fs = require('fs');
const Company = require(`../../models/company.model`);

const filePath = `../data/companies.json`;

// load companies data as object
const companies = JSON.parse( fs.readFileSync(filePath, 'utf-8') );

// insert comapines data into the database
(async () => {
    try {
        await Company.create(companies);
        console.log('Data Imported Successfully ✅')
    } catch (err) {
        console.log(err);
    }
    
    process.exit();
})();
