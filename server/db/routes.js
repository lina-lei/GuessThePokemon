let Pokemon = require('../Pokemon.js');
let db = require('./index.js');

module.exports.getOne = function(cb) {
  let randomNum = Math.ceil(Math.random() * 151);
  Pokemon.findOne({number: randomNum}, cb);
}