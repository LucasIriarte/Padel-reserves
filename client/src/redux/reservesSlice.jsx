import { createSlice } from '@reduxjs/toolkit';
import { getReservesDay } from './reservesActions.jsx';


const reservesSlice = createSlice({
    name: "reservesDay",
    initialState:{
        reservesDay:[],
        loading: false,
        error:""
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(getReservesDay.pending, (state, action)=>{
            state.loading = true
        }),
        builder.addCase(getReservesDay.fulfilled, (state, action)=>{
            state.loading = false
            state.reservesDay = action.payload
        }),
        builder.addCase(getReservesDay.rejected, (state, action)=>{
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default reservesSlice.reducer