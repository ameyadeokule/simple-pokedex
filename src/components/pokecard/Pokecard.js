import React from 'react'
import './pokecard.css'


const Pokecard = ({name,sprite}) => {
    return (
        <div className='pokecard'>
            <img className='pokemon-sprite' alt={name} src={sprite} />
            <p>{name}</p>
        </div>
    )
}

export default Pokecard
