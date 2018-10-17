import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import PokemonCard from './PokemonCard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPokemon: {
        name: "bulbasaur",
        types: ["Grass","Poison"],
        imageUrl: ""
      }
    };
    this.getOne = this.getOne.bind(this);
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

  render() {
    return (
      <div className="gamepage">
        <div className="gametitle">Welcome to the Pokemon Guessing Game!</div>
        <div className="gamearea">
          <PokemonCard name={this.state.currentPokemon.name} 
            types={this.state.currentPokemon.types} 
            imageUrl={this.state.currentPokemon.imageUrl} />

          <form>
            <label>Who's this Pokemon? </label>
            <input type="text"></input>
          </form>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
