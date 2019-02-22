import React, { Component } from 'react';

import ChelseaData from '../chelseadata/chelseadata'

import PlayerInfo from '../playerInfo/playerInfo'

import Staff from '../Staff/Staff'

import MainContainer from '../MainContainer/MainContainer'



import {
  BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default class staffRoute extends Component {

	render() {

		// const staffList = this.props.staffDB.map((staff,index) => {
  //     console.log(staff)
      
  //     return <li Key ={index}>
  //     <Link to={{
  //       pathname:`/staff/${staff.staff_id}`,
  //       state:{staff}
  //     }}>
  //     {staff.staff_name}
  //     </Link>
  //     </li>
  //   })

		return(
		<div>
		   props.staffList
		</div>
		)
	}
}
