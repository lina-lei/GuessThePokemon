let mongoose = require('mongoose');

let pokemonSchema = mongoose.Schema({
  number: {type: Number, unique: true},
  name: {type: String, unique: true},
  types: Array,
  imageUrl: String
});

let Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;