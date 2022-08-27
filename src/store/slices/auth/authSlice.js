import { createSlice } from "@reduxjs/toolkit";


export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-check', //check - not-check - checking
        uid:null,
        name:null,
        email:null,
        error: null 
    },
    reducers: {
        normalLogin: (state, action) => {
            state.status = "check";
            state.uid = action.payload.uid;
            state.email = action.payload.email;
            state.name = action.payload.displayName;
            state.error = null
        },
        logoutSession:(state, action) => {
            state.status = "not-check";
            state.uid = null;
            state.email = null;
            state.error = action.payload;
               },
        checkStatus:(state) => {
            state.status = "checking";
        },
        googleSignIn:(state, action) => {
            state.status = "check";
            state.uid = action.payload.uid;
            state.name = action.payload.displayName;
            state.email = action.payload.email;
            state.error = null
        },        
    },
})

export const { normalLogin, logoutSession, checkStatus, googleSignIn } = authSlice.actions