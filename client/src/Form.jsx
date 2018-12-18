import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userGuess: '',
      messageToUser: 'Who\'s This Pokemon?',
    };
    this.userGuess = this.userGuess.bind(this);
    this.handleUserGuess = this.handleUserGuess.bind(this);
  }

  userGuess(e) {
    this.setState({
      userGuess: e.target.value,
    });
  }

  handleUserGuess(e) {
    const { userGuess } = this.state;
    const { pokemonName, handleCorrectGuess } = this.props;
    e.preventDefault();
    if (userGuess.toLowerCase() === pokemonName.toLowerCase()) {
      handleCorrectGuess();
      this.setState({
        userGuess: '',
        messageToUser: 'You got it right! Play again?',
      });
    } else {
      this.setState({
        userGuess: '',
        messageToUser: 'That\'s not right, try again!',
      });
    }
  }

  render() {
    const { userGuess, messageToUser } = this.state;
    const { playing, getOne } = this.props;
    if (playing) {
      return (
        <form onSubmit={this.handleUserGuess}>
          <label>{messageToUser}</label>
          <br />
          <input type="text" value={userGuess} onChange={this.userGuess} autoFocus style={{textAlign: "center"}} />
        </form>
      );
    }
    return (
      <form>
        <label>{messageToUser}</label>
        <br />
        <button type="button" onClick={getOne}>Play Again</button>
      </form>
    );
  }
}

Form.propTypes = {
  pokemonName: PropTypes.string.isRequired,
  playing: PropTypes.bool.isRequired,
  getOne: PropTypes.func.isRequired,
  handleCorrectGuess: PropTypes.func.isRequired,
};

export default Form;
