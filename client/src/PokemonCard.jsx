import React from 'react';

const PokemonCard = ({ name, types, imageUrl }) => (
  <div className="pokemonCard">
    <div className="pokemonName">{name}</div>
    <div className="pokemonTypes">
      Types:
      {types.map(type => <span>{type}</span>)}
    </div>
    <img src={imageUrl} alt={name} />
  </div>
);

export default PokemonCard;
