import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterList from './components/CharacterList/CharacterList.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Midnight in Arkham</h1>
          <div className="event-log">This will be where the event log goes!</div>
        </header>
        <p className="App-intro">
          The night is strange...
          A concerned individual steps out into the darkness.
        </p>
        <CharacterList />
      </div>
    );
  }
}

export default App;
