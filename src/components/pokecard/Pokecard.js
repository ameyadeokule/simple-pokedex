import React from 'react';
import './pokecard.css';

const Pokecard = ({ id, name, sprite, handleClick }) => {
    return (
        <div className="pokecard" onClick={() => handleClick(name)}>
            {
                id <= 20
                    ? <img className="pokemon-sprite" alt="pokemon" src={sprite} />
                    : null
            }    
            <p>{name}</p>
        </div>
    )
}

export default Pokecard