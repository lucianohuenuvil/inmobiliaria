import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { close_details} from '../../../store/slices/view_publication/view_publication';

export const Residence = (prop) => {

  const dispatch = useDispatch()

  const apretarboton = () => {
      prop.setview(false);
      return dispatch(close_details ({
        status:"not-open",
        properties: {},
        status:null
      }))
  }









  const {properties} = useSelector(state => state.view_publication)



  return (
    <div className='re-box'>

        <div  className='re-content'>
            <div className='re-close-button'>
                <i onClick={apretarboton} className="fa-solid fa-xmark"></i>
            </div>

            <div className='re-description-container'>

                <div className='re-description-box'>

                    <div className='re-images-container'>
                        <div className='re-show-image'>
                            <img src={properties.image}></img>
                        </div>
                        <div className='re-images-list'>

                        </div>

                    </div>
                    
                    <div className='re-description'>
                        <div className='residence-description'>
                            <div className='residence-title'>
                                {(properties.tipo === "casa")
                                ?  <h3>Arriendo de casa</h3>
                                :   <h3>Arriendo de departamento</h3>}
                            </div>

                            <div className='residence-info'>
                                <div className='residence-info-price'>
                                    <p>{properties.precio}</p>
                                </div>
                                <div className='residence-info-location'>
                                    <p>{properties.region}</p>
                                    <p>{properties.comuna}</p>
                                </div>
                            </div>

                            <div className='residence-detail'>
                                <i className="fa-solid fa-bath">: {properties.banos}</i>
                                <i className="fa-solid fa-bed">: {properties.habitacion}</i>
                                <i className="fa-solid fa-m">: {properties.metros}</i>
                            </div>

                            <div className='residence-button'>
                                <button>Contactar</button>
                            </div>
                            <div className='residence-button'>
                                <button>Whatsapp</button>
                            </div>
                        
                        </div>

                        <div className='re-features'>
                            <div className='residence-title'>
                                <h3>Caracteristicas</h3>

                            </div>

                            <div className='re-features-table'>
                                <div className='re-features-table-row'>
                                    <div className='re-features-table-col-1'>
                                        <b>Gastos Comunes</b>
                                    </div>
                                    <div className='re-features-table-col-2'>
                                        <p>$50.000 </p>
                                    </div>

                                    
                                </div>
                                <div className='re-features-table-row-dark'>

                                    <div className='re-features-table-col-1'>
                                        <b>Dormitorios</b>
                                    </div>
                                    <div className='re-features-table-col-2'>
                                        <p>3 </p>
                                    </div>

                                </div>
                                <div className='re-features-table-row'>

                                    <div className='re-features-table-col-1'>
                                        <b>Baños</b>
                                    </div>
                                    <div className='re-features-table-col-2'>
                                        <p>2 </p>
                                    </div>
                                
                                </div>
                                <div className='re-features-table-row-dark'>

                                    
                                    <div className='re-features-table-col-1'>
                                        <b>Bodegas</b>
                                    </div>
                                    <div className='re-features-table-col-2'>
                                        <p>1 </p>
                                    </div>
                                    
                                </div>
                                <div className='re-features-table-row'>

                                    <div className='re-features-table-col-1'>
                                        <b>Estacionamientos</b>
                                    </div>
                                    <div className='re-features-table-col-2'>
                                        <p>0 </p>
                                    </div>
                                
                                </div>

                                <div className='re-features-table-row-dark'>

                                    <div className='re-features-table-col-1'>
                                        <b>Superficie útil</b>
                                    </div>
                                    <div className='re-features-table-col-2'>
                                        <p>60 </p>
                                    </div>

                                </div>

                                <div className='re-features-table-row'>

                                    <div className='re-features-table-col-1'>
                                        <b>Superficie total</b>
                                    </div>
                                    <div className='re-features-table-col-2'>
                                        <p>65 </p>
                                    </div>

                                </div>
                                <div className='re-features-table-row-dark'>

                                    <div className='re-features-table-col-1'>
                                        <b>Amoblado</b>
                                    </div>
                                    <div className='re-features-table-col-2'>
                                        <p>NO </p>
                                    </div>

                                </div>                            
                                
                            </div>
                        </div>
            
                    </div>

                </div>




                <div className='re-detail'>
    
                    <div className='residence-title'>
                        <h3>Descripción</h3>
                    </div>
                    <div className='re-detail-text'>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aspernatur tenetur nostrum debitis delectus inventore p
                        raesentium ut modi eum sint ea quod fugiat quos temporibus voluptatem, soluta eligendi, maxime necessitatibus?

                    </p>

                    </div>



                </div>


            </div>














{/* 

            <div key={properties.id} className='residence-container'>
                    <div className='residence-image'>
                        <img src={properties.image}></img>
                    </div>

                    <div className='residence-description'>
                        <div className='residence-title'>
                            {(properties.tipo === "casa")
                            ?  <h3>Arriendo de casa</h3>
                            :   <h3>Arriendo de departamento</h3>}
                        </div>

                        <div className='residence-info'>
                            <div className='residence-info-price'>
                                <p>{properties.precio}</p>
                            </div>
                            <div className='residence-info-location'>
                                <p>{properties.region}</p>
                                <p>{properties.comuna}</p>
                            </div>
                        </div>

                        <div className='residence-detail'>
                            <i className="fa-solid fa-bath">: {properties.banos}</i>
                            <i className="fa-solid fa-bed">: {properties.habitacion}</i>
                            <i className="fa-solid fa-m">: {properties.metros}</i>
                        </div>

                        <div className='residence-button'>
                            <button>Ver mas</button>
                        </div>
            
                    </div>
                </div> */}


            {/* <input onClick={apretarboton} type="button" value="apretar"/> */}

        </div>



    </div>
  )
}
