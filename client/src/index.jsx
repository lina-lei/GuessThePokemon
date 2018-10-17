import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import PokemonCard from './PokemonCard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPokemon: {
        name: "",
        types: [],
        imageUrl: ""
      },
      userGuess: "",
      image: "https://t2.rbxcdn.com/78ed347ce23ee44e76107cbf0dd2720f"
    };
    this.getOne = this.getOne.bind(this);
    this.userGuess = this.userGuess.bind(this);
    this.handleUserGuess = this.handleUserGuess.bind(this);
  }

  componentWillMount() {
    this.getOne();
  }

  getOne() {
    axios.get('/getOne')
    .then(results => {
      console.log('success:', results.data)
      this.setState({currentPokemon: results.data});
    })
    .catch(err => console.log(err))
  }

  userGuess(e) {
    console.log('userGuess:', e.target.value);
    this.setState({userGuess: e.target.value});
  }

  handleUserGuess() {
    if(this.state.userGuess.toLowerCase() === this.state.currentPokemon.name.toLowerCase()) {
      this.setState({image: this.state.currentPokemon.imageUrl});
    }
  }

  render() {
    return (
      <div className="gamepage">
        <div className="gametitle">Welcome to the Pokemon Guessing Game!</div>
        <div className="gamearea">
          <PokemonCard name={this.state.currentPokemon.name} 
            types={this.state.currentPokemon.types} 
            imageUrl={this.state.image} />

          <form>
            <label>Who's this Pokemon? </label>
            <input type="text" value={this.state.userGuess} onChange={this.userGuess}></input>
            <button type="button" onClick={this.handleUserGuess}>Guess!</button>
          </form>

        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
