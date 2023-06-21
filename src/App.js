import React from 'react'
import './App.css'
import Character from './components/Character'
import Characters from './components/Characters'
import { useState, useEffect} from 'react'
import axios from 'axios'
import {useHistory } from 'react'

const App = (props) =>{
  const [characters, setCharacters] = useState([])
  const {push}= useHistory()

  useEffect(() =>{
    getData()
  }, [])

  const getData =() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res =>{
        setCharacters(res.data)
        push(characters)
      })
      .catch(err =>{
        console.log(err)
      })
    }
      


  return(
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Characters characters={characters} character={Character}/>
    </div>
  );
}

export default App;