import React from 'react'
import Pokedex from './Pokedex'
import { Switch, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Pokedex}/>
      </Switch>  
    </>
  );
}

export default App;
