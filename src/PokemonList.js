import React, { useState, useEffect } from 'react'
import axios from 'axios'

const PokemonList = ({ pokemon }) => {
  const [pokemonInfo, setPokemonInfo] = useState({})

  useEffect(() => {
    axios.get(`${pokemon.url}`)
      .then(response => setPokemonInfo(response.data))
  }, [pokemon])

  return(
    <>
    {pokemonInfo !== undefined ?
      <div>
        {console.log(pokemonInfo)}
        <p>{pokemonInfo.name}</p>
        <p>{pokemonInfo.id}</p>
        <p>{pokemonInfo.abilities.map(ability => {
          return(
            ability
          )
        })}</p>
      </div>
       :
       "loading..."
    }
    </>
  )
}

export default PokemonList
