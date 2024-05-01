import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getBooking = createAsyncThunk(
    "booking/getBooking",
    async (dateAppointment) => {
        const { data } = await axios.get("/booking", {
            params: dateAppointment
        })
        return data
    }
)
