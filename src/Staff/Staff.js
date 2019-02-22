import React, { Component } from 'react';

import MainContainer from '../MainContainer/MainContainer'

export default class Staff extends Component {

	render() {
		// const staffList = this.state.staffDB.map((staff,index) => {
  //     console.log(staff)
  //     return <li Key ={index}>
  //     <Link to={{
  //       pathname:`/staff/staff.staff_id`,
  //       state:{staff}
  //     }}>
  //     {staff.staff_name}
  //     </Link>
  //     </li>
  //   })
		console.log(this.props)
		return (
			<div>
				<h1> Staff Info </h1>
				<section>
					<div className = "staffInfo">
				
					<p>{this.props.location.state.staff.staff_name}</p>
					<p>{this.props.location.state.staff.staff_position}</p>
					</div>
				</section>
			</div>

			)
		}

	}