import React, { Component } from 'react';
//import './App.css';
import PlayerList from './PlayerList.js';

class App extends Component {
  constructor(props) {
		super(props);
    var player1 = {
      name:"L Coote",
      position:"FB",
      salary:"200",
      club:"STH",
      seasonPoints:45,
      teamNo:"01"
    };
    var player2 = {
      name:"S Ratchford",
      position:"FB",
      salary:"250",
      club:"WAR",
      seasonPoints:63,
      teamNo:""
    };
    this.state = {players: [player1, player2]};
	}

  render() {
    return (
      <div className="App">
            <PlayerList players={this.state.players} />
      </div>
    );
  }
}

export default App;
