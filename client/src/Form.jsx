import React from 'react';

const Form = ({
  playing, messageToUser, userGuess, handleUserGuess,
}) => {
  if (playing) {
    return (
      <form onSubmit={handleUserGuess}>
        <label>{messageToUser}</label>
        <br />
        <input type="text" value={userGuess} onChange={userGuess} />
        {/* <button type="button" onClick={this.handleUserGuess}>Guess!</button> */}
      </form>
    );
  }
};

export default Form;
