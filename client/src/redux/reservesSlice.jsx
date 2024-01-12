import { createSlice } from '@reduxjs/toolkit'
import axios from "axios"


export const reservesSlice = createSlice({
    name: "reserves",
    initialState:{
        reserves:[]
    },
    reducers:{
        getAllReserves:(state)=>{
            axios.get('/reserves')
            .then(e=>console.log(e))
        }
    }
})

export default reservesSlice.reducer
export const { getAllReserves } = reservesSlice.actions