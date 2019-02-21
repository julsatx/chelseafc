import React, { Component } from 'react';

import MainContainer from '../MainContainer/MainContainer'

export default class Players extends Component {

	render() {
		// const playersList = this.state.chelseaDB.map((player,index) =>{
  //     return <li key ={index}>
  //     <Link to={{
  //       pathname:`/players/${player.player_id}`,
  //       state:{player}
  //     }}>
  //     {player.player_name}
  //     </Link>
  //     </li>
  //   })
		console.log(this.props)
		return (
			<div>
				<h1> Player Info </h1>
				<section>
						
						<div className = "playerInfo">
						<h1>{this.props.location.state.player.player_name}</h1>
						<p>{this.props.location.state.player.player_nationality}</p>
						<p>{this.props.location.state.player.player_primary_pos}</p>
						<p>Age: {this.props.location.state.player.player_age}</p>
						</div>
				</section>
			</div>

		)
	}
}

