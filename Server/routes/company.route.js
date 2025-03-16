const express = require('express');
const companyController = require('../controllers/company.controller');

const companyRouter = express.Router();

companyRouter
    .route('/')
    .post(companyController.createCompany)
    .get(companyController.getAllCompanies);

companyRouter
    .get('/search', companyController.searchCompanies);

companyRouter
    .route('/:id')
    .get(companyController.getCompany)
    .patch(companyController.updateCompany)
    .delete(companyController.deleteCompany);


module.exports = companyRouter;