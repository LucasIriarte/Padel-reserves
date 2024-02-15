import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getUserDetails = createAsyncThunk(
    "user/userDetails",
    async () => {
        const { data } = await axios.get("/users")
        return console.log(data)
    }
)