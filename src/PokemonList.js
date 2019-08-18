import React, { useState, useEffect } from 'react'
import axios from 'axios'

const PokemonList = ({ pokemon }) => {

  return (
    <div>
    <p>{pokemon.name}</p>
    <p>{pokemon.url}</p>
    </div>
  )
}

export default PokemonList
