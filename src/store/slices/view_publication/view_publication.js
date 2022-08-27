import { createSlice } from "@reduxjs/toolkit";


export const view_publication = createSlice({
    name: 'publication',
    initialState: {
        status: 'not-open', //open - not-open - checking
        properties: {}
    },
    reducers: {
        view_details: (state, action) => {
            state.status = "open";
            state.properties = action.payload;
        },

        close_details: (state, action) => {
            state.status = action.payload.status;
            state.properties = action.payload.properties;
        },
        

    },
})

export const { view_details, close_details } = view_publication.actions;