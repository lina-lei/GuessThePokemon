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
      image: 'http://i83.photobucket.com/albums/j284/zosifer/1237185489252.jpg',
      playing: true,
      messageToUser: '',
    };
    this.getOne = this.getOne.bind(this);
    this.handleCorrectGuess = this.handleCorrectGuess.bind(this);
  }

  componentWillMount() {
    this.getOne();
  }

  getOne() {
    axios.get('/getOne')
      .then((results) => {
        console.log('success:', results.data);
        this.setState({
          currentPokemon: results.data,
          image: 'http://i83.photobucket.com/albums/j284/zosifer/1237185489252.jpg',
          playing: true,
          messageToUser: 'Who\'s This Pokemon?',
        });
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

  handleCorrectGuess() {
    const { currentPokemon } = this.state;
    this.setState({
      displayName: currentPokemon.name,
      image: currentPokemon.imageUrl,
      playing: false,
      messageToUser: 'You got it right! Play again?',
    });
  }

  render() {
    const {
      currentPokemon, displayName, image, playing, messageToUser,
    } = this.state;
    return (
      <div className="gamepage">
        <div className="gametitle">Welcome to the Pokemon Guessing Game!</div>
        <div className="gamearea">
          <PokemonCard
            name={displayName}
            types={currentPokemon.types}
            imageUrl={image}
          />

          <Form
            pokemonName={currentPokemon.name}
            playing={playing}
            messageToUser={messageToUser}
            getOne={this.getOne}
            handleCorrectGuess={this.handleCorrectGuess}
          />

        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
