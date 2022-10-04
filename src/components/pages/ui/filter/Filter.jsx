import React from 'react'
import {useState} from 'react'
import { useSelector } from 'react-redux'


export const Filter = () => {


  const [city, setCity] = useState(false);

  const {filter_properties} = useSelector( state => state.filter);

  const selectCity = (e) => {
    const filterCity = filter_properties.region.filter( data => data.region === e.target.value);
    setCity(filterCity[0].comunas);
  }
  


  const handleSubmit = (e) => {
    e.preventDefault();
    const values = e.target;
    if (values.serviceType.value !== 'null' && values.region.value !== 'null' && values.departmentType.value !== 'null' && values.comuna.value !== 'null')  {
      console.log("FILTRO VALIDO");
    } else {
        alert('hay un error en el filtro ingresado');
    }

  }


  
  return (

    <form onSubmit={(e) => handleSubmit(e)} className='filter-container'>

        <div className='filters'>

          <div className='service-type'>
            <select name="serviceType" >
              <option value="null" disabled selected>Tipo de servicio</option>
              { filter_properties.serviceType.map( type =>  <option key={type}>{type}</option> ) }
            </select>
          </div>

          <div className='department-type'>
            <select name="departmentType" >
              <option value="null" disabled selected>Tipo de vivienda</option>
              { filter_properties.departmentType.map( type =>  <option key={type}>{type}</option> ) }
            </select>
          </div>

          <div className='region'>
            <select onChange={(e) => selectCity(e)} name="region" >
              <option value="null" disabled selected>Región</option>
              { filter_properties.region.map( type =>  <option  key={type.region}>{type.region}</option> ) }
            </select>
          </div>
          
          <div className='region'>
            <select name="comuna" >
              {
                (city === false)
                ?  <option value="null" disabled selected>Comuna</option>
                : (<option value="null" disabled selected>Comuna</option>,
                  city.map( type =>  <option key={type}>{type}</option> ) )              
              }
            </select>
          </div>

        </div>

{/* 

        <div className='search'>
            { <label>Buscador:</label> }
            <input type="text" placeholder='Busca una comuna'/>

        </div> */}

        <div className='button-search'>
            {/* <label>Buscador:</label> */}
            <input type="submit" value='Buscar'/>

        </div>

    </form>
  )
}
