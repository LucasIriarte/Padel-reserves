import { createSlice } from "@reduxjs/toolkit";
import { getBooking } from "./bookingActions";



const bookingSlice = createSlice({
    name: "booking",
    initialState: {
        booking:"",
        loading:false,
        error:""
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBooking.pending, (state, action) => {
            state.loading = true
        }),
        builder.addCase(getBooking.fulfilled, (state, action) => {
            state.loading = false
            state.booking = action.payload
        }),
        builder.addCase(getBooking.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})


export default bookingSlice.reducer