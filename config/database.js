const mongoose = require("mongoose");

function connectDb() {
    mongoose.connect(
        process.env.MONGODB_URI ||
        "mongodb://localhost:27017/park_demo",
        {
          useCreateIndex: true,
          useNewUrlParser: true
        }
      );
};

module.exports = connectDb;
