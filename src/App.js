import React from 'react'
import Pokedex from './Pokedex'
import PokeCard from './PokeCard'
import { Switch, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Pokedex}/>
        <Route exact path="/pokemon/:id" component={PokeCard}/>
      </Switch>
    </>
  );
}

export default App;
