import React from 'react';

const PokemonCard = (props) => {
  return (
    <div className="pokemonCard">
      <div className="pokemonName">{props.pokemonName}</div>
      <img src={props.pokemonPic} />
    </div>
  )
}

export default PokemonCard;