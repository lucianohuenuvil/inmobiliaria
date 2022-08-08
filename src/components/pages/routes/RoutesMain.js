import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Homescreen } from '../Homescreen'

export const RoutesMain = () => {
  return (
        <Routes>
            <Route path='/' element ={<Homescreen></Homescreen>}></Route>

            <Route path='/*' element ={ <Navigate to="/" /> } ></Route>
        </Routes>
  )
}
