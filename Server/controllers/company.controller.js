const Company = require('../models/company.model');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');


exports.getAllCompanies = catchAsync(async (req, res, next) => { console.log('here')
    const companies = await Company.find();

    res.status(200).json({
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

    res.status(200).json({
        status: 'success', 
        data: {
            company
        }
    });
});


exports.createCompany = catchAsync(async (req, res, next) => {
    const company = await Company.create(req.body)

    res.status(200).json({
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

    res.status(200).json({
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

    res.status(200).json({
        status: 'success',
        data: null
    });
});
