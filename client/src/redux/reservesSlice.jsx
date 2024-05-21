import { createSlice } from '@reduxjs/toolkit';
import { createReserve, getAllReserves } from './reservesActions.jsx';


const reservesSlice = createSlice({
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
        }),
        builder.addCase(createReserve.pending,(state,action)=>{
            state.loading = true
        }),
        builder.addCase(createReserve.fulfilled,(state,action)=>{
            state.loading = false
        }),
        builder.addCase(createReserve.rejected,(state,action)=>{
            state.loading = false
        })
    }
})

export default reservesSlice.reducer