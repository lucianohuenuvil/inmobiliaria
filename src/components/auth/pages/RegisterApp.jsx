import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { startRegister } from '../../../store/slices/auth/thunks'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { UseForm } from '../../hooks/UseForm'
import '../styles/auth.css'

export const RegisterApp = () => {
  
  const [erroMessage, seterroMessage] = useState({
    state: false,
    erro:''
  });

  const {formulario, handleform} = UseForm ({
    nombre:'',
    apellido:'',
    correo:'',
    rut:'',
    password:'',
    passwordConfirm:''
  });

  const { nombre, apellido, correo, rut, password, passwordConfirm} = formulario;


  const dispatch = useDispatch();

  const { error } = useSelector( state => state.auth)
  


  const validaCorreo = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  const validators = {
    nombre:[(value) => value.length < 3,'El nombre es obligatorio y debe tener mas de 2 caracteres.'],
    apellido:[(value) => value.length < 3,'El apellido es obligatorio y debe tener mas de 2 caracteres'],
    correo:[(value) => validaCorreo.test(value) == false,'El correo ingresado no es correcto'],
    rut:[(value) => (value.length < 8 || value.length > 9 || isNaN(value)),'Rut incorrecto, recuerde ingresar sin puntos ni guión'],
    password:[(value) => value.length < 6,'La contraseña debe tener mas de 5 caracteres'],
    passwordConfirm:[(value) => value.length < 6 ,'La contraseña debe tener mas de 5 caracteres'],
    passwordValidate:[() => password != passwordConfirm,'La contraseñas no coinciden']

  }

  const handlesubmit = (e) => {
    e.preventDefault()
    let error = false;

    for(const formField of Object.keys(validators)){
      const[fn,errorMessage] = validators[formField];
      if(fn(formulario[formField])){
        seterroMessage({state:true, erro:errorMessage});
        error = true;
        return;
      }
    }

    if (!error) {
      seterroMessage({state:false, erro:''});

      dispatch(startRegister(formulario));  

    }

  
  }

  const handlePasswordView = () => {
    const passwordIcon = document.querySelectorAll(".password")
    for (let i=0; i< passwordIcon.length; i++){
      if( passwordIcon[i].type === "password")
          passwordIcon[i].type = "text";
      else 
          passwordIcon[i].type = "password";
    }  
  }



  return (
  

      <div className='container-auth'>    

        <form onSubmit={handlesubmit} className='container-inputs'>
            <h2>Registro de usuarios</h2>

            <div className='field-input'>
                <input type="text" name='nombre'  placeholder='Nombre' onChange={handleform} value={nombre} />
            </div>

            <div className='field-input'>
                <input type="text" name='apellido'  placeholder='apellido' onChange={handleform} value={apellido} />
            </div>

            <div className='field-input'>
                <input type="email" name='correo' placeholder='Correo' onChange={handleform} value={correo} />
            </div>

            <div className='field-input'>
                <input type="text" name='rut'  placeholder='Rut' onChange={handleform} value={rut} />
            </div>

            <div className='field-input'>
                <input className='password' type='password' placeholder='Ingresar contraseña'  name='password' value={password} onChange={handleform}/>
                <i onClick={handlePasswordView} className="fa-solid fa-key"></i>
                
            </div>

            <div className='field-input'>
                <input className='password' type='password' placeholder='Ingrese nuevamente la contraseña'  name='passwordConfirm' value={passwordConfirm} onChange={handleform}/>
                <i onClick={handlePasswordView} className="fa-solid fa-key "></i>
            </div>


            { (erroMessage.state)
              &&  <div className='auth-buttons'>
                    <label className='error-session'>Error: {erroMessage.erro}</label>
                  </div>
            }

            { (error != null)
              &&  <div className='auth-buttons'>
                    <label className='error-session'>Error: {error}</label>
                  </div>
            }



            <div className='auth-buttons'>
                <input className='normal-session' type='submit' value="Continuar"/>
            </div>

            <div className='auth-actions'>
                <div className='auth-action-register'>
                    <p> ¿Ya tienes una cuenta? </p> <a href=""> Ingresar </a> 
                </div>
            </div>
        </form>



         
      </div>



  )
}
