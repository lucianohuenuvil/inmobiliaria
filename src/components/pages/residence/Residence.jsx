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

 // console.log(properties)



  return (
    <div className='residence-box'>



        <div  className='residence-content'>
            <div className='close-button'>
                <i onClick={apretarboton} className="fa-solid fa-xmark"></i>
            </div>



            <div className='images-container'>
              <div className='show-image'>

                  <img src={properties.image}></img>


              </div>
              <div className='images-list'>

              </div>

            </div>

            <div className='container-residence-description'>
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
