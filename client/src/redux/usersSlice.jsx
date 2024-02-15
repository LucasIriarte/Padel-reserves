import { createSlice } from "@reduxjs/toolkit";
import { getUserDetails } from "./usersActions.jsx"


const usersSlice = createSlice({
    name: "users",
    initialState:{
        user:"",
        loading:false,
        error:""
    },
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(usersSlice.pending, (state, action)=> {
            state.loading = true
        })
        builder.addCase(usersSlice.fullfiled, (state, action) => {
            state.loading = false
            state.user = action.payload
        })
        builder.addCase(usersSlice.rejected, (state, action) => {
            state.loading = false,
            state.error = action.error.message
        })
    }
})