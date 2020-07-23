const connectDb = require('../../config/database');
const userSeeder = require('./userSeeder');
const parkSeeder = require("./parkSeeder");
connectDb();

async function seed(){
    await userSeeder();
    await parkSeeder();
};

seed();