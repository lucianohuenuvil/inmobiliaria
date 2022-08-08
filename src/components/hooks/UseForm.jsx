import React, { useState } from 'react'

export const UseForm = ( data = {}) => {


    const [formulario, setFormulario] = useState ( data)



    const handleform = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]:e.target.value
        })
    }


  return {
    formulario,
    handleform
  }
    
  
}
