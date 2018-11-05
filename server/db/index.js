const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://pokemon:pokemon1@ds145043.mlab.com:45043/guessthepokemon' || 'mongodb://localhost:27017/guesspokemon');

module.exports = db;
