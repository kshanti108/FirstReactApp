import React, { Component } from 'react';
//import './App.css';
import PlayerListItem from './PlayerListItem.js';

class App extends Component {
  constructor(props) {
		super(props);
	}

  render() {
    return (
      <div className="PlayerList">
        <table>
          <PlayerListItem player={this.props.players[0]} />
          <PlayerListItem player={this.props.players[1]} />
        </table>
      </div>
    );
  }
}

export default App;
