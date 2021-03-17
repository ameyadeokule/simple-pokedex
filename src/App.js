import React,{useState,useEffect} from 'react'
import './App.css';
import Pokedex from "./components/pokedex/Pokedex";
import { pokemonData } from "./data/pokemonData";

function App() {
  
  const [pokemons,setPokemons]=useState([])
  const [searchField, setSearchField]= useState('')
  const [selectedPokemon, setSelectedPokemon]= useState(null)
  
  useEffect(()=>{
    setPokemons(pokemonData) 
  }
  ,[pokemons])
  
  return (
    <div className="App">
    <h1>Pokedex</h1>
    <Pokedex pokemons={pokemons}/>
    </div>
  );
}

export default App;
