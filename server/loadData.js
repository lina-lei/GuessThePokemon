// used to load all pokemon data into database (one time operation)
let pokemonData = require('./data');
let Pokemon = require('./Pokemon');
let db = require('./db/index');

let insertPokemon = () => {
  Pokemon.insertMany(pokemonData, (err) => {
    if(err) console.log('loadData err: ', err);
    else console.log('loadData successful');
  });
  
};

insertPokemon();