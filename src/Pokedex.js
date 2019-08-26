import React, { useState, useEffect } from 'react'
import PokemonList from './PokemonList'
import { Container, Col, Row } from 'reactstrap'
import './Pokedex.css'
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
      <Container>
        <Row className="text-center">
          {
            pokemons.length > 0 ?
            pokemons.map(
              pokemon =>
              <Col className="mb-3" lg="2" md="4" xs="6">
                <PokemonList
                  key={pokemon.name}
                  pokemon={pokemon}
                />
              </Col>
            )
            :
            "LOADING..."
          }
        </Row>
      </Container>
    </>
  )
}

export default Pokedex
