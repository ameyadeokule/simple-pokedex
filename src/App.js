import React,{useState,useEffect} from 'react'
import './App.css';
import Pokedex from "./components/pokedex/Pokedex";
import { pokemonData } from "./data/pokemonData";

function App() {
  
  const [pokemons, setPokemons]=useState([])
  const [searchField, setSearchField]= useState('')
  const [selectedPokemon, setSelectedPokemon]= useState(null)
  
  useEffect(()=>{
    setPokemons(pokemonData) 
  }
  ,[pokemons])
  
  const searchFieldUpdate = (searchField) => {
		setSearchField( searchField );
	}
  
  const handleClick = (name) => {
		let selectedPokemon = pokemons.find(pokemon => pokemon.name === name);
		setSelectedPokemon(selectedPokemon);
	}
  
  const searchPokemons = pokemons.filter(pokemon=>{
    return pokemon.name ? pokemon.name.toLowerCase().includes(searchField.toLowerCase()):false
  });
  
  return (
    
    <div className="App">
    <h1>Pokedex</h1>
    <Pokedex pokemons={searchPokemons} searchFieldUpdate={searchFieldUpdate} handleClick={handleClick} selectedPokemon={selectedPokemon} />
    </div>
  );
}

export default App;
