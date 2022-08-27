import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './navbar.css'

export const Navbar = ({toggleNav, settoggleNav}) => {


  const {name} = useSelector (state => state.auth)



  return (
    <header className='header'>

        <div className="container-navbar">


              <NavLink to="/" className="logo">{name}</NavLink>

              <nav className="navbar">
                  <NavLink className={ ({isActive}) => (isActive ? 'actives' : '')} to="/">Home</NavLink>
                  <NavLink className={ ({isActive}) => (isActive ? 'actives' : '')} to="/auth/register">Registro</NavLink>
                  <NavLink className={ ({isActive}) => (isActive ? 'actives' : '')} to="/listaDeCompras">Login</NavLink>
                  
              </nav>


              <div  className='button-nav'>
                  <i onClick={ () => settoggleNav(!toggleNav)} className='fa-solid fa-bars'></i>
              </div>


        </div>

        <nav className={ (toggleNav ) ? "navbar-responsive showmenu" : "navbar-responsive"}>
            <NavLink className={ ({isActive}) => (isActive ? 'actives' : '')} to="/">Home</NavLink>
            <NavLink className={ ({isActive}) => (isActive ? 'actives' : '')} to="/auth/register">Registro</NavLink>
            <NavLink className={ ({isActive}) => (isActive ? 'actives' : '')} to="/listaDeCompras">Login</NavLink>
        </nav>

    </header>
  )
}
