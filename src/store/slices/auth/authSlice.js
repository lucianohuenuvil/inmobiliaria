import { createSlice } from "@reduxjs/toolkit";


export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-check', //check - not-check - checking
        email:null,
        password:null,
        error: null 
    },
    reducers: {
        login: (state, action) => {
            // state.isLoading = !state.isLoading;
        },
        logout:(state, action) => {
            // state.isLoading = !state.isLoading;
        },
        check:(state, action) => {
            state.status = action.payload.status;
        },
        
    },
})

export const { login, logout, check } = authSlice.actions