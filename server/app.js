const express = require('express');
// const bodyParser = require('body-parser')
const app = express()


// app.use(bodyParser.urlencoded({extend: false}));
// app.use(bodyParser.json());


// Upload route
var payment_router = require('./routes/checkout')

// Routes
app.use('/api', payment_router)

module.exports = app;