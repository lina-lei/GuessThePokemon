import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import PokemonCard from './PokemonCard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="gamepage">
        <div className="gametitle">Welcome to the Pokemon Guessing Game!</div>
        <div className="gamearea">
          <PokemonCard pokemonName="bulbasaur" pokemonPic="http://vignette3.wikia.nocookie.net/nintendo/images/b/bf/Mew.png/revision/latest?cb=20141002090523&path-prefix=en" />

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
