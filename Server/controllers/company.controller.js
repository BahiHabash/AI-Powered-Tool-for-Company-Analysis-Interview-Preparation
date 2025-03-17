const slugify = require('slugify');

const Company = require('../models/company.model');
const APIFeatures = require('../utils/APIFeatures');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllCompanies = catchAsync(async (req, res, next) => { 
    let features = new APIFeatures(Company.find(), req.query)
        .filter()
        .sort()
        .fields()
        .paginate();

    const companies = await features.queryDB;

    return res.status(200).json({
        status: 'success', 
        result: companies.length,
        data: {
            companies
        }
    });
});

exports.getCompany = catchAsync(async (req, res, next) => { 
    const company = await Company.findById({'_id': req.params.id});
    
    if (!company) {
        return next( new AppError(`No such company with the id: ${req.params.id}.`, 404) );
    }

    return res.status(200).json({
        status: 'success', 
        data: {
            company
        }
    });
});


exports.createCompany = catchAsync(async (req, res, next) => {
    const company = await Company.create(req.body)

    return res.status(200).json({
        status: 'success',
        data: {
            company
        }
    });
});

exports.updateCompany = catchAsync(async (req, res, next) => {
    const newCompany = await Company.findByIdAndUpdate(req.params.id, req.body);

    if (!newCompany) {
        return next( new AppError(`No such company with the id: ${req.params.id}.`, 404) );
    }

    return res.status(200).json({
        status: 'success', 
        data: {
            comapany: newCompany
        }
    });
});

exports.deleteCompany = catchAsync(async (req, res, next) => {
    const company = await Company.findByIdAndDelete(req.params.id);

    if (!company) {
        return next(new AppError(`No such company with the id: ${req.params.id}.`, 404));
    }

    return res.status(200).json({
        status: 'success',
        data: null
    });
});

exports.searchCompanies = catchAsync(async (req, res, next) => {
    const { name } = req.query;
console.log(req.query)
    if (!name) {
        return next( new AppError(`Please provide a company name to search.`, 400) );
    }
    
    const slug = slugify(name, { lower: true, strict: true });

    const companies = await Company.find({ slug });

    return res.status(200).json({
        status: 'success', 
        result: companies.length,
        data: {
            companies
        }
    });
});
