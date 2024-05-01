import { configureStore } from "@reduxjs/toolkit";
import reservesSlice from "./reservesSlice.jsx";
import userSlice from "./usersSlice.jsx"
import axios from "axios";
import bookingSlice from "./bookingSlice.jsx";

export default configureStore({
    reducer: {
        reserves: reservesSlice,
        userDetails: userSlice,
        booking: bookingSlice
    },
})