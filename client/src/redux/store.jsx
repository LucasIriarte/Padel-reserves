import { configureStore } from "@reduxjs/toolkit";
import reservesSlice from "./reservesSlice.jsx";
import userSlice from "./usersSlice.jsx"
import bookingSlice from "./bookingSlice.jsx";
import shedulesSlice from "./shedulesSlice.jsx";

export default configureStore({
    reducer: {
        reserves: reservesSlice,
        userDetails: userSlice,
        booking: bookingSlice,
        shedules: shedulesSlice
    },
})