import { configureStore } from "@reduxjs/toolkit";
import reservesSlice from "./reservesSlice.jsx";

export default configureStore({
    reducer: {
        reserves: reservesSlice
    },
})