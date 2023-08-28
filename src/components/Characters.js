import React, { Component } from 'react'
import Character from './Character';
import '../App.css';

export default class Characters extends Component {
    constructor(props) {
        console.log("constructor initialized")
        super(props);

        this.state = {
            characters: []
        }
    }

    componentDidMount() {
        console.log("component mounted")
        fetch("https://rickandmortyapi.com/api/character")
        .then( (response) => response.json())
        .then( (data) => 
            this.setState({
                characters: [...data.results]
            })
        )
    }

    componentDidUpdate() {
        console.log("component updated", this.state.characters) // only fires when an update happens
    }

  render() {
    console.log("render")
    return (
      <div>
        <h1>Rick and Morty Characters</h1>
        <ul className='all-chars'>
            {this.state.characters.map( (character) => {
                // put the formatted list into a Character component
                // and return the component with props
                // Characters.js takes props as a param
                // variable that gets the mapped character object
                return(<Character character={character} />)
            })}

        </ul>

      </div>
    )
  }
}


/**
 * component lifecycle methods
 * what happens from the moment its added to the DOM until its destroyed (removed)
 * constructor, componentDidMount, ComponentDidUpdate, render
 */