import { createSlice } from "@reduxjs/toolkit";
import { getUserDetails, getUsers } from "./usersActions.jsx"


export const userSlice = createSlice({
    name: "user",
    initialState:{
        userDetails:{},
        users:[],
        loading:false,
        error:""
    },
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getUserDetails.pending, (state, action)=> {
            state.loading = true
        })
        builder.addCase(getUserDetails.fulfilled, (state, action) => {
            state.loading = false
            state.userDetails = action.payload
        })
        builder.addCase(getUserDetails.rejected, (state, action) => {
            state.loading = false,
            state.error = action.error.message
        })
        builder.addCase(getUsers.pending, (state, action)=> {
            state.loading = true
        })
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
        })
        builder.addCase(getUsers.rejected, (state, action) => {
            state.loading = false,
            state.error = action.error.message
        })
    }
})

export default userSlice.reducer