import React, { Component } from 'react';
class PlayerListItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		var item = this.props.player;
		return (
			<div>
				<td>{item.position}</td>
				<td>{item.name}</td>
				<td>{item.club}</td>
				<td>{item.salary}</td>
				<td>{item.points}</td>
			</div>
		);
	}
}
export default PlayerListItem;
