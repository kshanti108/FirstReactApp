import React, { Component } from 'react';
class PlayerListItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		var item = this.props.player;
		return (
			<div>
				<tr>
					<td width="20">{item.position}</td>
					<td width="150">{item.name}</td>
					<td width="50">{item.club}</td>
					<td width="30">£{item.salary}k</td>
					<td width="30">{item.seasonPoints}</td>
				</tr>
			</div>
		);
	}
}
export default PlayerListItem;
