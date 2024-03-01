import { configureStore } from "@reduxjs/toolkit";
import reservesSlice from "./reservesSlice.jsx";
import userSlice from "./usersSlice.jsx"

export default configureStore({
    reducer: {
        reserves: reservesSlice,
        userDetails: userSlice
    },
})