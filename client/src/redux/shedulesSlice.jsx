import { createSlice } from "@reduxjs/toolkit";
import { getShedules } from "./shedulesActions.jsx"


const shedulesSlice = createSlice({
    name: "shedules",
    initialState: {
        shedules: [],
        loading: false,
        error: ""
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getShedules.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getShedules.fulfilled, (state, action) => {
            state.loading = false
            state.shedules = action.payload
        })
        builder.addCase(getShedules.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default shedulesSlice.reducer