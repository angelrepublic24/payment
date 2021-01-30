'use strict';
require('./config/config')
const express = require('express');
// Set your stripe private key here
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

const app = express();
app.use(express.static('./public'));

app.get('/stripeSecret', function(req, res, next) {
  const amount = 2 * 100;
  const currency = 'usd';

  stripe.paymentIntents.create({ amount, currency }).
    then(intent => res.json({ secret: intent['client_secret'] })).
    catch(next);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500).json({ message: err.message });
});

app.listen(3000, ()=>{
  console.log('Server running on port: 3000');
});