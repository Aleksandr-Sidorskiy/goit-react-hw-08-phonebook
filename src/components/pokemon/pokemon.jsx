import { useGetPokemonByNameQuery } from "redux/pokemonSlice";
import { useState } from "react";

export const Pokemon = () => {
    const [pokemonName, setPokemonName] = useState('');    
    const { data,  } = useGetPokemonByNameQuery(pokemonName, {
        skip: pokemonName === '',
        // error, isFetching,
    });
    const normalizedPokemon = pokemonName.toLowerCase().value;
    console.log('pokemonName', normalizedPokemon);
    // console.log('data', data);
    // console.log('isFetching', isFetching)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        setPokemonName(e.currentTarget.elements.pokemonName.value)
        e.currentTarget.reset();
    }
    return <>
        <h2>pokemon api</h2>
        <form autoComplete="off" onSubmit={handleSubmit}>
            <input type="text" name="pokemonName" />
            <button type = "submit">Search</button>
        </form>

        <div>
            {data && <h2>{data.name }</h2>}
        </div>
    </>
}