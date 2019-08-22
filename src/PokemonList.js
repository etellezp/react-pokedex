import React, { useState, useEffect } from 'react'
import axios from 'axios'

const PokemonList = ({ pokemon }) => {
  const [pokemonInfo, setPokemonInfo] = useState([])

  useEffect(() => {
    axios.get(`${pokemon.url}`)
      .then(response => setPokemonInfo(response.data))
  }, [])

  return(
    <>
      <p>{pokemonInfo.name}</p>
      <p>{pokemonInfo.stats.map(stat => stat[0].base_stat)}</p>
    </>
  )
}

export default PokemonList
