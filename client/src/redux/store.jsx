import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./reducer.jsx"
import reservesSlice from "./reservesSlice.jsx";

export default configureStore({
    reducer: {
        reserves: reservesSlice
    },
})