const express = require('express');
const checkOutControllers = require('../controllers/checkout.controllers')

var router = express.Router();

router.post('/payment', checkOutControllers.paymentRequest())



module.exports = router