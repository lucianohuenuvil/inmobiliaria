import React from 'react'
import { NavLink } from 'react-router-dom'
import { UseForm } from '../../hooks/UseForm'


export const RegisterApp = () => {


  const {formulario, handleform} = UseForm ();
  
  const {id, nombre, apellido, correo, rut} = formulario ;

  const hanndlesubmit = (e) => {
    e.preventDefault()
    console.log(e.target)

  }


  return (
    
    <div>
      <NavLink className={ ({isActive}) => (isActive ? 'actives' : '')} to="/auth/login">Ir al login</NavLink>

      

      

      <div>
          <form onSubmit={hanndlesubmit}>
              <input type="text" name='id' placeholder='id' onChange={handleform} value={id} />
              <input type="text" name='nombre'   placeholder='nombre' onChange={handleform} value={nombre} />
              <input type="text" name='apellido'  placeholder='apellido' onChange={handleform} value={apellido} />
              <input type="email" name='correo'  placeholder='Correo' onChange={handleform} value={correo} />
              <input type="text" name='rut'  placeholder='Rut' onChange={handleform} value={rut} />
              <input type="submit" name='apellido' value="enviar"/>
          </form>
      </div>
    </div>
  )
}
