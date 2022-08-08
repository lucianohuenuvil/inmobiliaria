import {startLoadingPokemons, setPokemons} from './pokemonSlice'

export const getPokemons = () => {
    return async (dispatch, getState) => {
        dispatch( startLoadingPokemons() );

        const respuets = await fetch ('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')

        const data = await respuets.json()
        
        dispatch (setPokemons( {
            page:0,
            pokemons: data.results
        }))



    }
}