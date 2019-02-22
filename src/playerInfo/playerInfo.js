import React, { Component } from 'react';

import MainContainer from '../MainContainer/MainContainer'
import { Link } from 'react-router-dom'

export default class Players extends Component {

	render() {
		/*const playersList = this.props.chelseaDB.map((player,index) =>{
      return <li key ={index}>
      <Link to={{
        pathname:`/players/${player.player_id}`,
        state:{player}
      }}>
      {player.player_name}
      </Link>
      </li>
    })*/
		console.log(this.props)
		return (
			<div>
				<h1> Player Info </h1>
				<section>
						
						<div className = "playerInfo">
						<h1>{this.props.location.state.player.player_name}</h1>
						{<img src={this.props.location.state.pic[0].image}/>}

						<p>{this.props.location.state.player.player_nationality}</p>
						<p>{this.props.location.state.player.player_primary_pos}</p>
						<p>Age: {this.props.location.state.player.player_age}</p>
						<p> ID: {this.props.location.state.player.player_id}</p>
						</div>
				</section>
			</div>

		)
	}
}

