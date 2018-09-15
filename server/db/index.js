let mongoose = require('mongoose');
let uri = 'mongodb://localhost:27017/guesspokemon';

let db = mongoose.connect(uri);

module.exports = db;