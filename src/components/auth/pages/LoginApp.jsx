import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../styles/auth.css'
import { checkingAuth, startGoogleSignIn, startEmailSignIn } from '../../../store/slices/auth/thunks'
import { UseForm } from '../../hooks/UseForm'
import { Link } from 'react-router-dom'


export const LoginApp = () => {

  const dispatch = useDispatch();
  const { error } = useSelector( state => state.auth)




  const {formulario, handleform} = UseForm({
    email:'',
    password:''
  });

  const {email, password} = formulario;

  


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch( startEmailSignIn(email,password) );
  }


  const handleGoogleSignIn = () => {
    dispatch( startGoogleSignIn() );
  }



  return (

    <div className='container-auth'>      

      <form onSubmit={handleSubmit} className='container-inputs'>
          <h2>¡Inicia sesión en tu cuenta </h2>
      
          <div className='field-input'>
              <i className="fa-solid fa-envelope"></i>
              <input type='text' placeholder='Ingresar Email' name='email'  value={email} onChange={handleform}/>
          </div>

          <div className='field-input'>
              <i className="fa-solid fa-key"></i>
              <input type='password' placeholder='Ingresar contraseña' name='password' value={password} onChange={handleform}/>
          </div>

          { (error != null)
              &&  <div className='auth-buttons'>
                    <label className='error-session'>Error: {error}</label>
                  </div>
          }

          <div className='auth-buttons'>
              <input className='normal-session' type='submit' value="INICIAR SESIÓN"/>
              <input className='google-session' type='button' onClick={handleGoogleSignIn} value="INICIAR CON GOOGLE"/>
          </div>



          <div className='auth-actions'>
              <div className='auth-action-password'>
                  <a href="">  ¿Has olvidado la contraseña? </a>
              </div>
              <div className='auth-action-register'>
                  <p> ¿No tienes una cuenta? </p> <Link to='/auth/register'> Regístrate </Link> 
              </div>
          </div>



      </form>
    </div>

  )
}
