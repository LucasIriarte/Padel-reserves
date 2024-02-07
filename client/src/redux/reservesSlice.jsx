import { createSlice } from '@reduxjs/toolkit';
import { getAllReserves } from './reservesActions.jsx';


export const reservesSlice = createSlice({
    name: "reserves",
    initialState:{
        reserves:[],
        loading: false,
        error:""
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(getAllReserves.pending, (state, action)=>{
            state.loading = true
        }),
        builder.addCase(getAllReserves.fulfilled, (state, action)=>{
            state.loading = false
            state.reserves = action.payload
        }),
        builder.addCase(getAllReserves.rejected, (state, action)=>{
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default reservesSlice.reducer