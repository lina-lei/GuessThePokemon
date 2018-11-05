import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userGuess: '',
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
    e.preventDefault();
    if (this.state.userGuess.toLowerCase() === this.props.pokemonName.toLowerCase()) {
      this.props.handleCorrectGuess();
      this.setState({
        userGuess: '',
      });
    }
  }

  render() {
    if (this.props.playing) {
      return (
        <form onSubmit={this.handleUserGuess}>
          <label>{this.props.messageToUser}</label>
          <br />
          <input type="text" value={this.state.userGuess} onChange={this.userGuess} />
        </form>
      );
    }
    return (
      <form>
        <label>{this.props.messageToUser}</label>
        <br />
        <button type="button" onClick={this.props.getOne}>Play Again</button>
      </form>
    );
  }
}

export default Form;
