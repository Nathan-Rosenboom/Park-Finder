const User = require("../../../models/User");

async function randomModel (modelName) {

    const model = require("../../../models/" + modelName)

    const count = await model.count({});

    const random = Math.floor(Math.random()) * count;

    const models = await model.find({});

    return models[random];

}

module.exports = randomModel;