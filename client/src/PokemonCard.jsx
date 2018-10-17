import React from 'react';

const PokemonCard = (props) => {
  return (
    <div className="pokemonCard">
      <div className="pokemonName">{props.name}</div>
      <ul className="pokemonTypes">{props.types.map(type => {
        return <li>{type}</li>
      })}</ul>
      <img src={props.imageUrl} />
    </div>
  )
}

export default PokemonCard;