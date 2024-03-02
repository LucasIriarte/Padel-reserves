import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getUserDetails = createAsyncThunk(
    "user/userDetails",
    async (info) => {
        const { data } = await axios.post("/users",info)
        return data
    }
)