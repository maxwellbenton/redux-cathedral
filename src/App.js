import React, { Component } from 'react';
import Nav from './Nav'
import GameContainer from './GameContainer'
import PieceContainer from './PieceContainer'
import OpponentContainer from './OpponentContainer'

class App extends Component {


  render() {
    return (
      <div className="App">
        <Nav />
        <GameContainer />
        <PieceContainer />
        
        <OpponentContainer />
      </div>
    );
  }
}

export default App;
