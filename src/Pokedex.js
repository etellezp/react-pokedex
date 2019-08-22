import React, { useState, useEffect } from 'react'
import PokemonList from './PokemonList'
import axios from 'axios'

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=15")
      .then(response => setPokemons(response.data.results))
  }, [])

  return (
    <>
      <h1>POKEDEX</h1>

      {pokemons.length > 0 ? pokemons.map(pokemon => <PokemonList key={pokemon.name} pokemon={pokemon}/>) : "LOADING..."}
    </>
  )
}

export default Pokedex
