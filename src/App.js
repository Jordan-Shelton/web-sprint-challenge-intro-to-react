import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'
import styled from 'styled-components'
import './index'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [starWarsData, setStarWarsData] = useState([])
  useEffect(() => {
    axios.get('https://swapi.dev/api/people').then((res) => {
      setStarWarsData(res.data)
    })
    .catch()
  },[])
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {starWarsData.map(function(element, ixd){
        return <Character
        name= {element.name}
        gender = {element.gender}
        height = {element.height}
        eye = {element.eye_color}
        mass = {element.mass}
        key = {ixd}
        />
      })}
    </div>
  );
}

export default App;
