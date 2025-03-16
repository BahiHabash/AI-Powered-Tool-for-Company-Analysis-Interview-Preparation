const mongoose = require("mongoose");

const RegionSchema = new mongoose.Schema({
    country: { 
        type: String, required: true 
    },
    state: { 
        type: String 
    },
    city: { 
        type: String, required: true 
    }
}, {
    _id: false 
});

const LocationSchema = new mongoose.Schema({
    address: { 
        type: String, required: true 
    },
    region: { 
        type: RegionSchema, required: true 
    }
}, { 
    _id: false
});

const SocialMediaSchema = new mongoose.Schema({
    platform: { 
        type: String, required: true 
    },
    url: { 
        type: String, required: true 
    }
}, {
    _id: false 
});

const CompanySchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, 'Company must has name.'] 
    },
    logoBackground: String,
    logo: String,
    url: { 
        type: String,
        required: [true, 'Company must has url.']
    },
    stacks: { 
        type: [String],
        required: [true, 'Company must has stacks.']
    },
    progLangs: { 
        type: [String], 
        required: [true, 'Company must has programming Languages.'] 
    },
    frontend: [String],
    backend: [String],
    isHiring: Boolean,
    offerInternships: Boolean,
    p: Number,
    location: [LocationSchema],
    slug: { 
        type: String, 
        required: [true, 'Company must has slug.'], 
        unique: true 
    },
    description: { 
        type: String, 
        required: [true, 'Company must has description.'] 
    },
    industry: { 
        type: [String], 
        required: [true, 'Company must has industry.']
    },
    socialMedia: [SocialMediaSchema],
    careersLinks: [String],
    verified: Boolean,
    uniqueName: { 
        type: String, 
        required: [true, 'Company must has unique name.'], 
        unique: true 
    },
    sourceOfData: [String],
    hidden: { 
        type: Boolean, 
        default: false 
    },
    linkedinCompanyId: String,
    lastUpdate: {
        type: Date,
        default: Date.now
    }
}, { 
    toJSON: true,
    toObject: true,
    timestamps: true 
});

const Company = mongoose.model("Company", CompanySchema);

module.exports = Company;
