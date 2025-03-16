const mongoose = require('mongoose');
const slugify = require('slugify');

const RegionSchema = new mongoose.Schema({
    country: { 
        type: String, required: [true, `Company's region must placed in a country.`]
    },
    state: { 
        type: String 
    },
    city: { 
        type: String
    }
}, {
    _id: false 
});

const LocationSchema = new mongoose.Schema({
    address: String,
    region: RegionSchema
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
    url: String,
    stacks: [String],
    progLangs: [String],
    frontend: [String],
    backend: [String],
    isHiring: Boolean,
    offerInternships: Boolean,
    p: Number,
    location: [LocationSchema],
    slug: { 
        type: String,
        unique: true 
    },
    description: String, 
    industry: [String],
    socialMedia: {
        type: Map,
        of: String
    },
    careersLinks: [String],
    verified: Boolean,
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

// auto-generate slug from name before saving
CompanySchema.pre("save", function (next) {
    if (this.isModified("name") || this.isNew) {
        this.slug = slugify(this.name, { lower: true, strict: true });
    }
    next();
});

const Company = mongoose.model("Company", CompanySchema);

module.exports = Company;
