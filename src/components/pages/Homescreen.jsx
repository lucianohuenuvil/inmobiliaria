import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../store/slices/auth/thunks';
import { startAddNewPublication } from '../../store/slices/publications/thunks';
import { Residences } from './residence/Residences';
import { Filter } from './ui/filter/Filter';
import './styles/index.css'


export const Homescreen = () => {


  const dispatch = useDispatch()

  // const {name} = useSelector (state => state.auth)


  const logout = () => {
    dispatch( startLogout() );
  }



  const addpublication = () => {
    dispatch( startAddNewPublication() );
  }

  return (
    <div className='homescreen-container'>

      <Filter></Filter>
      <Residences></Residences>


      <div>
        <button onClick={logout}> LOGOUT </button>
      </div>


      <div>
        <button onClick={addpublication}> Añadir publicación </button>
      </div>


    </div>

    
  )
}
