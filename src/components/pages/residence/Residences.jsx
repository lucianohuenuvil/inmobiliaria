import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { view_details } from '../../../store/slices/view_publication/view_publication';
//import { viewPublication } from '../../../store/slices/publications/publicationSlice';
import { Residence } from './Residence'



export const Residences = () => {
    const [view, setview] = useState(false);


    useEffect(() => {
        if(view) document.querySelector("html").style = 'overflow:hidden;'
        else document.querySelector("html").style = 'overflow:scroll;'
    }, [view])


    const {residential_properties} =  useSelector (state => state.publications)

    const dispatch = useDispatch();
    
    
    const selectResidence = (residence) => {
        console.log(residence)
        setview(true);
        return dispatch( view_details (residence))
    }
    



    return (

        <div className='residences-component'>

            {
                (view)
                && <Residence setview={setview} view={view}></Residence>
            }


            {residential_properties.map( (data) => 
    
                <div key={data.id} onClick={() => selectResidence(data)} className='residence-container'>
                    <div className='residence-image'>
                        <img src={data.image}></img>
                    </div>

                    <div className='residence-description'>
                        <div className='residence-title'>
                            {(data.tipo === "casa")
                            ?  <h3>Arriendo de casa</h3>
                            :   <h3>Arriendo de departamento</h3>}
                        </div>

                        <div className='residence-info'>
                            <div className='residence-info-price'>
                                <p>{data.precio}</p>
                            </div>
                            <div className='residence-info-location'>
                                <p>{data.region}</p>
                                <p>{data.comuna}</p>
                            </div>
                        </div>

                        <div className='residence-detail'>
                            <i className="fa-solid fa-bath">: {data.banos}</i>
                            <i className="fa-solid fa-bed">: {data.habitacion}</i>
                            <i className="fa-solid fa-m">: {data.metros}</i>
                        </div>

                        <div className='residence-button'>
                            <button>Ver mas</button>
                        </div>
            
                    </div>
                </div>
            )}
        
        </div>
    )
}
