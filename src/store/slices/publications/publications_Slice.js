import { createSlice } from "@reduxjs/toolkit";


export const publications_Slice = createSlice({
    name: 'publications',
    initialState: {
        status: 'not-open', //open - not-open - checking
        residential_properties: [
            {   
                id:"1",
                image:"https://i.blogs.es/c68014/casa-3d/840_560.jpeg",
                tipo:"casa",
                precio:"$420.000",
                region:"Metropolitana",
                comuna:"las condes",
                banos:"2",
                habitacion:"2",
                metros:"60"
            },
            {   
                id:"2",
                image:"https://www.ciudaris.com/blog/wp-content/uploads/ventajas-vivir-departamento-03.jpg",
                tipo:"departamento",
                precio:"$520.000",
                region:"Metropolitana",
                comuna:"La florida",
                banos:"2",
                habitacion:"2",
                metros:"50"
            },
            {   
                id:"3",
                image:"https://i.blogs.es/c68014/casa-3d/840_560.jpeg",
                tipo:"casa",
                precio:"$600.000",
                region:"Metropolitana",
                comuna:"Maipú",
                banos:"2",
                habitacion:"2",
                metros:"60"
            },
        ],
        active:null
    },
    reducers: {
        addNewPublication: (state, action) => {
             state.status = "check";
             state.residential_properties = action.payload;
            // state.email = action.payload.email;
            // state.name = action.payload.displayName;
            // state.error = null
        },
    },
})

export const { addNewPublication } = publications_Slice.actions;