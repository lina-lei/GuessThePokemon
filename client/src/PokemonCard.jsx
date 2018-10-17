import React from 'react';

const PokemonCard = (props) => {
  return (
    <div className="pokemonCard">
      <div className="pokemonName">{props.pokemonName}</div>
      <ul className="pokemonTypes">{props.pokemonTypes.map(type => {
        return <li>{type}</li>
      })}</ul>
      <img src={props.pokemonPic} />
    </div>
  )
}

export default PokemonCard;