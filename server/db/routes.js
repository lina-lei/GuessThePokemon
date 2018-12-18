const Pokemon = require('../Pokemon.js');
const db = require('./index.js');

function getOne(cb) {
  const randomNum = Math.ceil(Math.random() * 151);
  Pokemon.findOne({ number: randomNum }, cb);
}

module.exports.getOne = getOne;
