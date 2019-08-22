import React, { useState, useEffect } from 'react'
import axios from 'axios'

const PokemonList = ({ pokemon }) => {
  const [pokemonInfo, setPokemonInfo] = useState({data: null})

  useEffect(() => {
    axios.get(`${pokemon.url}`)
      .then(response => setPokemonInfo({data: response.data}))
  }, [pokemon.url])

  return(
    <div>
      {
        pokemonInfo.data !== null ?
        <div>
        <img src={pokemonInfo.data.sprites.front_default} alt={pokemonInfo.data.name}/>
        <p>{pokemonInfo.data.name}</p>
        </div>
        :
        "LOADING..."
      }
    </div>
  )
}

export default PokemonList
