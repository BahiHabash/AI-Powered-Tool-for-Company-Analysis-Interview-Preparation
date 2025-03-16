const mongoose = require("mongoose");

const RegionSchema = new mongoose.Schema({
    country: { 
        type: String, required: false
    },
    state: { 
        type: String 
    },
    city: { 
        type: String, required: false
    }
}, {
    _id: false 
});

const LocationSchema = new mongoose.Schema({
    address: { 
        type: String, required: false
    },
    region: { 
        type: RegionSchema, required: false
    }
}, { 
    _id: false
});


const CompanySchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [false, 'Company must has name.'] 
    },
    logoBackground: String,
    logo: String,
    url: { 
        type: String,
        required: [false, 'Company must has url.']
    },
    stacks: { 
        type: [String],
        required: [false, 'Company must has stacks.']
    },
    progLangs: { 
        type: [String], 
        required: [false, 'Company must has programming Languages.'] 
    },
    frontend: [String],
    backend: [String],
    isHiring: Boolean,
    offerInternships: Boolean,
    p: Number,
    // location: {
    //     type: [LocationSchema],
    //     _id: false
    // },
    slug: { 
        type: String, 
        required: [false, 'Company must has slug.'], 
        unique: true 
    },
    description: { 
        type: String, 
        required: [false, 'Company must has description.'] 
    },
    industry: { 
        type: [String], 
        required: [false, 'Company must has industry.']
    },
    socialMedia: {
        type: Map,
        of: String
    },
    careersLinks: [String],
    verified: Boolean,
    uniqueName: { 
        type: String,
        required: [false, 'Company must has unique name.'], 
        unique: true 
    },
    sourceOfData: [String],
    hidden: { 
        type: Boolean, 
        default: false 
    },
    linkedinCompanyId: String
}, { 
    toJSON: true,
    toObject: true,
    timestamps: true 
});


const Company = mongoose.model("Company", CompanySchema);

module.exports = Company;
