const fs = require('fs');
const path = require('path');

const filePath = '../data/companies.json';
const outputPath = '../data/companies.json';

const companies = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

for (const company of companies) {
    delete company['_id'];
    delete company['__v'];
    delete company['uniqueName'];
    delete company['slug'];

    for (const location of company.location) {
        delete location.__v;
        delete location._id;

        if (location.region) {
            delete location.region.__v;
            delete location.region._id;
        }
    }
}

fs.writeFileSync(outputPath, JSON.stringify(companies, null, 2));

console.log('Companies JSON updated successfully ✅');



// clear the social media

/*
old
    "location": [
        {
            "address": "The GrEEK Campus, Mall of Arabia",
            "region": {
                "_id": "64f332e19971fbe1a7e06764",
                "country": "Egypt",
                "state": "Giza",
                "city": "Sheikh Zayed City",
                "__v": 0
            },
            "_id": "64f3330d9971fbe1a7e06860",
            "__v": 0
        }
    ]

---------

new
    "location": [
        {
            "address": "The GrEEK Campus, Mall of Arabia",
            "region": {
                "country": "Egypt",
                "state": "Giza",
                "city": "Sheikh Zayed City"
            }
        }
    ]
*/