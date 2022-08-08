import { increment, decrement, incrementby} from '../../store/slices/counter/counterSlice';
import { startLoadingPokemons } from '../../store/slices/pokemon/pokemonSlice'; 
import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import { getPokemons } from '../../store/slices/pokemon/thunks';

export const Homescreen = () => {

  
  const { contador, pibe } = useSelector( state => state.counter);
  const { isLoading } = useSelector(state => state.pokemons)
  const dispatch = useDispatch()



  const getpokemon = () => {
    dispatch(getPokemons())
  }

  return (
    <div>
      <h1>a</h1>
      <h1>a</h1>
      <h1>a</h1>
      <h1>a</h1>


      <div>
        <h1>b</h1>
        <h1>b</h1>
        <h1>b</h1>
        <h1>POKEMON</h1>
        <button onClick={ ()=>dispatch( startLoadingPokemons() )}>Cambiar state</button>
        {
          (isLoading === true)
          ? <h1>True</h1>
          : <h2>FALSE</h2>
        }

        <button onClick={getpokemon}> get</button>
        

      </div>
      <button onClick={ ()=>dispatch( increment() )}>Incrementar</button>
      <button onClick={ ()=>dispatch( decrement() )}>Disminuir</button>
      <button onClick={ ()=>dispatch( incrementby(2) )}>+ 2</button>
      <h1>{contador}, {pibe}</h1>



    </div>

    
  )
}
