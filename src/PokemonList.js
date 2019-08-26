import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap'
import axios from 'axios'

const PokemonList = ({ pokemon }) => {
  const [pokemonInfo, setPokemonInfo] = useState({data: null})

  useEffect(() => {
    axios.get(`${pokemon.url}`)
      .then(response => setPokemonInfo({data: response.data}))
  }, [pokemon.url])

  return(
    <>
      {
        pokemonInfo.data !== null ?
        <div>
          <Card>
            <CardImg
              src={pokemonInfo.data.sprites.front_default} alt={pokemonInfo.data.name}
            />
            <CardBody>
              <CardTitle>
                {pokemonInfo.data.name}
              </CardTitle>
              <Button>
                <Link
                  className="text-white"
                  to={{
                    pathname: `/pokemon/${pokemonInfo.data.id}`,
                    state: {pokemonInfo: pokemonInfo}
                  }}>
                  View Pokemon
                </Link>
              </Button>
            </CardBody>
          </Card>
        </div>
        :
        "LOADING..."
      }
    </>
  )
}

export default PokemonList
