const connectDb = require('../../config/database');
const userSeeder = require('./userSeeder');
const parkSeeder = require("./parkSeeder");
const commentSeeder = require("./commentSeeder");
connectDb();

async function seed(){
    await userSeeder();
    await parkSeeder();
    await commentSeeder();
};

seed();