const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var checkoutSchema = new Schema({
    cardName: {
        type: String,
        required: true
    },
    cardNumber: {
        type: String,
        required: true
    },
    expCard: {
        type: String,
        required: true,
    },
    cvc: {
        type: Number,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Checkout', checkoutSchema)