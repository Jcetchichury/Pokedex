import React from 'react';
import ListaPokemon from '../Components/listaPekemons/listaPokemon.jsx';
import StatusPokemon from '../Components/statusPokemon/statusPokemon.jsx';
import '../App.css';
// import { useParams } from 'react-router-dom';

function PokemonStatus() {
    // const { id } = useParams()
    
    

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
