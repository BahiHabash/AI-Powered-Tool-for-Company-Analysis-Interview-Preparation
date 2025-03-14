const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const AppError = require('./middlewares/appError');
const errorController = require('./controllers/error.controller');



const app = express();

app.use(express.json());

app.use(cors());



if (process.env.NODE_ENV === 'development') {
    app.use( morgan('dev') );
}

app.use('/', (req, res, next) => {
    return res.send('Welcom !');
});

app.all('*', (req, res, next) =>
    next( new AppError(`Can't found ${req.originalUrl} on this server`, 404) )
);

app.use(errorController);

module.exports = app;



