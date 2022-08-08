import { useState } from 'react'



export const UseButton = ( initialValue = false) => {


    const [button, setbutton] = useState( initialValue )

    

    const handleState = (index) => {
        if (index === true){
          setbutton(false);
        }
        else{
          setbutton(true)
        }
    }
    

    return {
        button,
        handleState
    }
}
