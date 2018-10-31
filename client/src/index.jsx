import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import PokemonCard from './PokemonCard.jsx';
import Form from './Form.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPokemon: {
        name: '',
        types: [],
        imageUrl: '',
      },
      displayName: '',
      userGuess: '',
      image: 'http://i83.photobucket.com/albums/j284/zosifer/1237185489252.jpg',
      playing: true,
      messageToUser: 'Who\'s This Pokemon?',
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
      .then((results) => {
        console.log('success:', results.data);
        this.setState({ currentPokemon: results.data });
      })
      .then(() => {
        const copy = this.state.currentPokemon.name.slice().split('');
        let scrambled = '';
        while (copy.length > 0) {
          const randomIndex = Math.floor(Math.random() * copy.length);
          scrambled += copy.splice(randomIndex, 1);
        }
        this.setState({ displayName: scrambled });
      })
      .catch(err => console.log(err));
  }

  userGuess(e) {
    this.setState({ userGuess: e.target.value });
  }

  handleUserGuess(e) {
    e.preventDefault();
    if (this.state.userGuess.toLowerCase() === this.state.currentPokemon.name.toLowerCase()) {
      this.setState({
        image: this.state.currentPokemon.imageUrl,
        displayName: this.state.currentPokemon.name,
        messageToUser: 'You got it right! Play again?',
        userGuess: '',
      });
    }
  }

  render() {
    return (
      <div className="gamepage">
        <div className="gametitle">Welcome to the Pokemon Guessing Game!</div>
        <div className="gamearea">
          <PokemonCard
            name={this.state.displayName}
            types={this.state.currentPokemon.types}
            imageUrl={this.state.image}
          />

          <Form
            playing={this.state.playing}
            messageToUser={this.state.messageToUser}
            userGuess={this.userGuess}
            handleUserGuess={this.handleUserGuess}
          />

        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
