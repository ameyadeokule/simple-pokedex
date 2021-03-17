import React from 'react'
import './pokedex.css'
import Pokelist from "../pokelist/Pokelist";

function Pokedex({pokemons}) {
    console.log(pokemons[0])
    
    return (
        <div className='pokedex-container'>
            <div className='pokelist-container'>
                <Pokelist pokemons={pokemons}/>
            </div>        
        <div className='pokesearchresult-container'>
            
        </div>
        </div>
    )
}

export default Pokedex