const faker = require("faker");
const User = require("../../models/User");

function seedData() {
  User.collection.deleteMany();

  for (let index = 0; index < 10; index++) {

    const user = new User({
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: "secret",

    });

    user.save();

  }

}

module.exports = seedData;
