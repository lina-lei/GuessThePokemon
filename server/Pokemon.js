const mongoose = require('mongoose');

const pokemonSchema = mongoose.Schema({
  number: {
    type: Number,
    unique: true,
  },
  name: {
    type: String,
    unique: true,
  },
  types: Array,
  imageUrl: String,
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;
