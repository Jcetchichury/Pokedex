import React from 'react';
import Home  from "./page/home.jsx"
import PokemonStatus from './page/pokemonStatus.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/pokemonStatus/:id" element={<PokemonStatus />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;