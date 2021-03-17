import React from 'react';
import './searchbox.css';


const Searchbox = ({ placeholder, searchFieldUpdate }) => (
    <input 
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={e => {
            searchFieldUpdate(e.target.value);
        }}
    />
)

export default Searchbox