import React, { Component } from 'react';
import './App.css';
import ChelseaData from './chelseadata/chelseadata'
import PlayersInfo from './playerInfo/playerInfo'
import MainContainer from './MainContainer/MainContainer'
import PlayerInfo from './playerInfo/playerInfo'
import Staff from './Staff/Staff'
import StaffRoute from './Staff/staffRoute'

import {
  BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

  export default class App extends Component {

  	render() {
  		return (
  			<Router>
  			<div className = "App">
  		    <nav>
          <Link to ='/'>Home</Link>{' '}
          <Link to ='/players'>Players</Link>{' '}
          <Link to ='/staff'>Staff</Link>{' '}
          </nav>
          <Switch>
              
              <Route exact path='/players' component={MainContainer} />

              <Route exact path='/staff' component={StaffRoute} />

              <Route path='/players/:players_id' component={PlayerInfo} />
             
              <Route path ='/Staff/:staff_id' component={Staff} />
          </Switch> 
  			</div>
        </Router>
  		)
  	}
  }
