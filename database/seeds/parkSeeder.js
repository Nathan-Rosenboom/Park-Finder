const faker = require("faker");
const Park = require("../../models/Park");
const User = require("../../models/User");
const randomModel = require("./utils/randomModel");

async function seedData() {
  Park.collection.deleteMany();

  for (let index = 0; index < 10; index++) {

    const randomUser = await randomModel("User");

    const park = new Park({
      name: faker.lorem.words(),
      description: faker.lorem.sentence(),
      streetAddress: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      toilets: faker.random.boolean(),
      exerciseFacilities: faker.random.boolean(),
      petsAllowed: faker.random.boolean(),
      user_id: randomUser._id

    });

    park.save();

  }

}

module.exports = seedData;
