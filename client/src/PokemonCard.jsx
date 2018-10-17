import React from 'react';

const PokemonCard = ({name, types, imageUrl}) => {
  return (
    <div className="pokemonCard">
      <div className="pokemonName">{name}</div>
      <div className="pokemonTypes">Types: {types.map(type => {
        return <span>{type}</span>
      })}</div>
      <img src={imageUrl} />
    </div>
  )
}

export default PokemonCard;
