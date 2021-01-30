process.env.PORT = process.env.PORT || 3000;
process.env.STRIPE_PRIVATE_KEY = process.env.STRIPE_PRIVATE_KEY || 'pk_test_51IDvFsChm9euINRUOgky8fis2l88uDsaDJtz8DoXdAeHZGb4M1G4pzV1CzLryfC2nrECJyLQTTabqfCUQi0HWc8200Nj2RgyrR'

process.env.NODE_ENV = process.env.NODE_ENV || 'env';

let urlDB

if(process.env.NODE_ENV === 'env'){
    urlDB = 'mongodb://localhost:27017/payment'
}else{
    urlDB = process.env.MONGO_DB;
}

process.env.URLDB = urlDB
