import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        contador: 10,
        pibe: "hola"
    },
    reducers: {
        increment: (state) => {
            state.contador += 1;
        },
        incrementby:(state, action) => {
            state.contador += action.payload;
        },
        decrement: (state) => {
            state.contador -= 1;
        },

    },
})

export const {increment, decrement, incrementby} = counterSlice.actions