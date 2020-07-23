const faker = require("faker");
const Comment = require("../../models/Comment");
const Park = require("../../models/Park");
const User = require("../../models/User");

async function seedData() {
  Comment.collection.deleteMany();

  for (let index = 0; index < 10; index++) {

    const userCount = await User.count({});
    const random = Math.floor(Math.random()) * userCount;
    const randomUser = (await User.find({}))[random];

    const parkCount = await Park.count({});
    const random2 = Math.floor(Math.random()) * parkCount;
    const randomPark = (await User.find({}))[random2];

    const comment = new Comment({
      title: faker.lorem.words(),
      body: faker.lorem.sentence(),
      user_id: randomUser._id,
      park_id: randomPark._id

    });

    comment.save();

  }

}

module.exports = seedData;
