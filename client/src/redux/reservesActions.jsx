import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getAllReserves = createAsyncThunk(
    'reserves/getReserves',
    async (dateAppointment) => {
        const { data } = await axios.get(`/reserves/${dateAppointment}`)
        return data
    }
)