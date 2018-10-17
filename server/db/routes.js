let Pokemon = require('../Pokemon.js');

// exports.getOne = (cb) => {
//   let randomNum = Math.ceil(Math.random() * 151);
//   console.log('hi', randomNum);
//   Pokemon.find({number: randomNum}, cb);
// };

exports.getOne = function(cb) {
//   let randomNum = Math.ceil(Math.random() * 151);
//   console.log('hi', randomNum);
  Pokemon.findOne({"name": "Mew"}, cb);
}