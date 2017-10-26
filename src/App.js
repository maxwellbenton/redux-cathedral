import React, { Component } from 'react';
import Nav from './Nav'
import GameContainer from './GameContainer'

class App extends Component {


  render() {
    return (
      <div className="App">
        <Nav />

        <GameContainer />

      </div>
    );
  }
}

export default App;
