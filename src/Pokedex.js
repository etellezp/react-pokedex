import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => setPokemons(response.data.results))
  }, [])

  return (
    <>
      <h1>Pokedex</h1>
      {pokemons.map(pokemon => (
        <p key={pokemon.name}>{pokemon.name}</p>
      ))}
    </>
  )
}

export default Pokedex
