import React from 'react'


export const Filter = () => {
  return (
    <div className='filter-container'>

        <div className='filters'>

          <div className='service-type'>
              <select name="" id="">
                <option value="1">Arriendo</option>
                <option value="1">Compra</option>
              </select>
          </div>

          <div className='department-type'>
            <select name="" id="">
                <option value="1">Casa</option>
                <option value="1">Departamento</option>
                <option value="1">Oficina</option>
              </select>
          </div>

          <div className='region'>
            <select name="" id="">
                <option value="1">Arica-Perinacota</option>
                <option value="1">Tarapacá</option>
                <option value="1">Atofagasta</option>
                <option value="1">Atacama</option>
                <option value="1">Coquimbo</option>
                <option value="1">Valparaíso</option>
                <option value="1">Metropolitana</option>
                <option value="1">O'Higgins</option>
                <option value="1">Maule</option>
                <option value="1">Ñuble</option>
                <option value="1">Bío Bío</option>
                <option value="1">Araucanía</option>
                <option value="1">Los Ríos</option>
                <option value="1">Los Lagos</option>
                <option value="1">Aysen</option>
                <option value="1">Magallanes</option>
              </select>
          </div>

        </div>



        <div className='search'>
            {/* <label>Buscador:</label> */}
            <input type="text" placeholder='Busca una comuna'/>

        </div>

        <div className='button-search'>
            {/* <label>Buscador:</label> */}
            <input type="button" value='Buscar'/>

        </div>

    </div>
  )
}
