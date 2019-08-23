import React from 'react'

function PokeCard(props) {
  console.log("pokemonInfo", props.location.state.pokemonInfo.data)
  return (
    <h1>Hello from PokeCard</h1>
  )
}

export default PokeCard
