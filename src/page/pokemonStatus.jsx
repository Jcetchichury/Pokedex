import React from 'react';
import ListaPokemon from '../Components/listaPekemons/listaPokemon.jsx';
import StatusPokemon from '../Components/statusPokemon/statusPokemon.jsx';
import '../App.css';

function PokemonStatus() {
    
    

    return (
        <>
            <div className='body'>
                <ListaPokemon />
                <StatusPokemon />
            </div>
        </>
    );
}

export default PokemonStatus
