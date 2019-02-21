import React from 'react'

const chelseaList = (props) => {
	const playerList = props.chelseaData.map((chelseaData,i)=>{
		return <li key={i}> {chelseaData.strPlayer}<img src={chelseaData.strThumb} alt="player face"/> </li>
	})
	console.log("This player list", playerList)
return(
	<ul>
		{playerList}
	</ul>
	)}

export default chelseaList