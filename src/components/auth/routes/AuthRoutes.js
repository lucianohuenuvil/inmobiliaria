import React from 'react'
import { useSelector } from 'react-redux'
import { Routes, Navigate, Route } from 'react-router-dom'
import { Loading } from '../loading/Loading'
import { LoginApp } from '../pages/LoginApp'
import { RegisterApp } from '../pages/RegisterApp'


export const AuthRoutes = () => {


  return (
    <Routes>
        <Route path="login" element ={ <LoginApp></LoginApp>} ></Route>
        <Route path="register" element ={ <RegisterApp></RegisterApp>} ></Route>


        <Route path='/*' element ={ <Navigate to="/auth/login" /> } ></Route>

    </Routes>
  )
}
