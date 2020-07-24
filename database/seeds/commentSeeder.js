const faker = require("faker");
const Comment = require("../../models/Comment");
const Park = require("../../models/Park");
const User = require("../../models/User");
const randomModel = require("./utils/randomModel");

async function seedData() {
  Comment.collection.deleteMany();

  for (let index = 0; index < 10; index++) {

    const randomUser =  await randomModel("User");
    const randomPark = await randomModel("Park");

    const comment = new Comment({
      body: faker.lorem.paragraph(),
      user_id: randomUser._id,
      park_id: randomPark._id

    });

    comment.save();

  }

}

module.exports = seedData;
