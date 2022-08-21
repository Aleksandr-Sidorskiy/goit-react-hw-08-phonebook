import { useGetPokemonByNameQuery } from "redux/pokemonSlice";
import { useState } from "react";
import Loader from "components/Loader/Loader";

export const Pokemon = () => {
    const [pokemonName, setPokemonName] = useState('');    
    const { data, error, isFetching, isError } = useGetPokemonByNameQuery(pokemonName, {
        skip: pokemonName === '',
        // 
    });
    // const normalizedPokemon = pokemonName.toLowerCase().value;
    // console.log('pokemonName', pokemonName);
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
            {isFetching && <Loader />}
        <div>
            {isError && <p>Failed!!!{ error.data}</p>}
            {data && !isFetching && !isError && <h2>{data.name }</h2>}
        </div>
    </>
}