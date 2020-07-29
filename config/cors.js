const config = require('./app');

const whitelist = [
    // config.appUrl,
    "*",
    "http://localhost:3000",
    "localhost:3000",
    "https://salty-spire-93839.herokuapp.com"
];

module.exports =  {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
};