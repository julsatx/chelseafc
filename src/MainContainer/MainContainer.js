import React, { Component } from 'react';
// import '../App.css';
import ChelseaData from '../chelseadata/chelseadata'

import PlayerInfo from '../playerInfo/playerInfo'

import Staff from '../Staff/Staff'


import {
  BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default class MainContainer extends Component {
  state = {
        staffFlip: false,
        playersFlip: false,
        chelseaData: [],
        chelseaDB : [],
        players: [],
        staffDB: [],
        
        }

    connectDB2 = async () => {
      try {
        const staffDB = await fetch('http://localhost:7000/Chelsea/staff')
        const staffJson = await staffDB.json()
      this.setState({
       staffDB: staffJson,
       staffFlip: true,
       playersFlip: false
     })
      return staffJson
      } catch (err) {
        console.log(err.message,'staffDB error!')
        return err
      }
    }
 
    connectDB = async () => {
      try {
          const chelseaDB = await fetch('http://localhost:7000/Chelsea/players')
          const dbJson = await chelseaDB.json()
      
      this.setState({ chelseaDB: dbJson,
        playersFlip: true,
        staffFlip: false
       })
      return dbJson
      } catch (err) {
        console.log(err.message,'DB caught a catch error')
        return err
      }
    }
    getChelseaData = async () => {
        try {
            const chelseaApi = await fetch(' https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=Chelsea')
            const chelseaJson = await chelseaApi.json()

            this.setState({ chelseaData: chelseaJson.player })
        } catch (err) {
            console.log(err, 'catch caught an error!!!')
            return err
        }
    }



    componentDidMount() {
        this.getChelseaData().then((data) => console.log(data, 'did mount'))
        this.connectDB().then((data) => console.log(data, 'DB mounted'))
        this.connectDB2().then((data) => console.log(data,'staffDB loacked and loaded'))
    }
  render() {


    const playerPics = this.state.chelseaData.map((player,index) =>{
      console.log(player.strThumb)
            return {image : player.strThumb, name : player.idPlayer}
    })


    const playersList = this.state.chelseaDB.map((player,index) =>{
      console.log(player.player_id, ';dlsfkjgs;ldfkjgs;dlfkjgs;dlfkgsj')
       let pic = playerPics.filter(item => player.player_id === parseInt(item.name)   )
       console.log(pic, ';flkhdf')
       return <li key ={index}>
      <Link to={{
        pathname:`/players/${player.player_id}`,
        state:{player, pic}
      }}>
      {player.player_name}
      </Link>
      </li>
    })


    const staffList = this.state.staffDB.map((staff,index) => {
      console.log(staff)
      return <li Key ={index}>
      <Link to={{
        pathname:`/staff/${staff.staff_id}`,
        state:{staff}
      }}>
      {staff.staff_name}
      </Link>
      </li>
    })

    return (
      <div className="App">
      Chelsea FC

       <ul>

       {playersList}
       {staffList}

       
       </ul>
      </div>
    );
  }
}

// this.setState({staffFlip:false, playersFlip:true})
// this.State({staffFlip:true, playersFlip:false})
