import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./reducer.jsx"

export default configureStore({
    reducer: {Reducer},
})