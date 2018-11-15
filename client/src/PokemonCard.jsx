import React from 'react';
import PropTypes from 'prop-types';

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

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default PokemonCard;
