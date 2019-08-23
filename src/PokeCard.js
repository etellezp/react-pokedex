import React from 'react'

function PokeCard(props) {
  const pokeData = props.location.state.pokemonInfo.data

  return (
    <div>
      {pokeData ?
        <>
          <img
            src={pokeData.sprites.front_default} alt={pokeData.name}
          />
          <h1>{pokeData.name}</h1>
          <h3>Height: {pokeData.height}</h3>
          <h3>Weight: {pokeData.weight}</h3>
          <h3>Stats:</h3>
          {
            pokeData.stats.map(stat => {
              return (
                <ul>
                  <li>{stat.stat.name}: {stat.base_stat}</li>
                </ul>
              )
            })
          }
          <h3>Abilities:</h3>
          {
            pokeData.abilities.map(ability => {
              return (
                <ul>
                  <li>{ability.ability.name}</li>
                </ul>
              )
            })
          }
          <h3>Type:</h3>
          {
            pokeData.types.map(type => {
              return (
                <ul>
                  <li>{type.type.name}</li>
                </ul>
              )
            })
          }
          <h3>Moves:</h3>
          {
            pokeData.moves.map(move => {
              return(
                <ul>
                  <li>{move.move.name}</li>
                </ul>
              )
            })
          }
        </>
        :
        "no data"
      }
    </div>
  )
}

export default PokeCard
