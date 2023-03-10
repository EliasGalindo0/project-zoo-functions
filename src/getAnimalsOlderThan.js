const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => species.find((specie) => specie.name === animal)
  .residents.every((residentAge) => residentAge.age >= age);

module.exports = getAnimalsOlderThan;
