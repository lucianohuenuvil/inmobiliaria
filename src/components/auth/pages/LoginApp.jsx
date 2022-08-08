import React from 'react'
import { useState } from 'react'
import { UseButton } from '../../hooks/UseButton'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import '../styles/auth.css'
import { checkingAuth } from '../../../store/slices/auth/thunks'


export const LoginApp = () => {

  const dispatch = useDispatch();



  const [input, setInput] = useState({
    email:'',
    password:''
  });



  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch( checkingAuth ());
  }


  const handleGoogleSignIn = () => {
    dispatch( checkingAuth ());
  }

  const handleinput= (e) => {
    setInput({
      ...input,
      [e.target.name]:e.target.value})
  }



  return (

    <div className='container-auth'>      

      <form onSubmit={handleSubmit} className='container-login'>
          <h2>¡Inicia sesión en tu cuenta </h2>
      
          <div className='field-input'>
              <i className="fa-solid fa-envelope"></i>
              <input type='text' placeholder='Ingresar Email' name='email'  value={input.email} onChange={handleinput}/>
          </div>

          <div className='field-input'>
              <i className="fa-solid fa-key"></i>
              <input type='password' placeholder='Ingresar contraseña' name='password' value={input.password} onChange={handleinput}/>
          </div>

          <div className='auth-buttons'>
              <input className='normal-session' type='submit' value="Iniciar sesión"/>
              <input className='google-session' type='button' onClick={handleGoogleSignIn} value="Iniciar con Google"/>
          </div>

          <div className='auth-actions'>
              <div className='auth-action-password'>
                  <a href="">  ¿Has olvidado la contraseña? </a>
              </div>
              <div className='auth-action-register'>
                  <p> ¿No tienes una cuenta? </p> <a href=""> Regístrate </a> 
              </div>
          </div>
      </form>
    </div>

  )
}
