import React from 'react'
import './pokelist.css'
import Pokecard from '../pokecard/Pokecard'

function Pokelist({pokemons}) {
    return (
        <div className='pokelist'>
            {
                pokemons.map(pokemon=>{
                    let sprite = null
                    
                    try{
                        sprite = JSON.parse(pokemon.sprite)
                        sprite = sprite.normal
                    }
                    catch(error){
                        console.log(error)
                    }
                    return pokemon.name && <Pokecard name={pokemon.name} sprite={sprite} key={pokemon.id} /> 
                })
            }
        </div>
    )
}

export default Pokelist
