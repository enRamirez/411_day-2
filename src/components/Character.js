import React from 'react'
import '../App.css';

export default function Character(props) {
    console.log(props)
  return (
    <li className='char-info'>
        <img src={props.character.image} alt={props.character.name}/>
        <h3>{props.character.name}</h3> 
        <p>{props.character.location.name}</p>

    </li>
  )
}
