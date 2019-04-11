import React, { Component } from 'react';
//import './App.css';
import PlayerListItem from './PlayerListItem.js';

class App extends Component {
  constructor(props) {
		super(props);
		this.state = {
      currentPlayer: {
        name:"L Coote",
        position:"FB",
        salary:"200",
        club:"STH",
        seasonPoints:45,
        teamNo:1
      }
    };
	}

  render() {
    return (
      <div className="App">
        <table>
          <tr>
            <PlayerListItem player={this.state.currentPlayer} />
          </tr>
        </table>
      </div>
    );
  }
}

export default App;
