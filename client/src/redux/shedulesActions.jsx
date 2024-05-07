import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


export const getShedules = createAsyncThunk(
    "/shedules",
    async () => {
        const {data} = await axios.get("/shedules")
        return data
    }
)