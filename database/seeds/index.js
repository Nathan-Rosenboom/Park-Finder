const connectDb = require('../../config/database');
const userSeeder = require('./userSeeder');
connectDb();

function seed(){
    userSeeder()
};

seed();