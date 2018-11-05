// used to load all pokemon data into database (one time operation)
const pokemonData = require('./data');
const Pokemon = require('./Pokemon');
const db = require('./db/index');

const insertPokemon = () => {
  Pokemon.insertMany(pokemonData, (err) => {
    if (err) console.log('loadData err: ', err);
    else console.log('loadData successful');
  });
};

insertPokemon();
