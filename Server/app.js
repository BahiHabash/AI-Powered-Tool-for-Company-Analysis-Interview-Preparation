const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const AppError = require('./utils/appError');
const errorController = require('./middlewares/error.middleware');
const companyRouter = require('./routes/company.route');



const app = express();

app.use(express.json());

app.use(cors());



if (process.env.NODE_ENV === 'development') {
    app.use( morgan('dev') );
}

// app.use('/', (req, res, next) => res.send('Welcom !'));
app.use('/api/v1/company', companyRouter);

app.all('*', (req, res, next) =>
    next( new AppError(`Can't found ${req.originalUrl} on this server`, 404) )
);

app.use(errorController);

module.exports = app;



