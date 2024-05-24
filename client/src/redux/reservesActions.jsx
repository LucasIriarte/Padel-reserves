import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getReservesDay = createAsyncThunk(
    'reserves/getReserves',
    async (date) => {
        console.log(date)
        const { data } = await axios.get('/reserves', { params: date });
        console.log(data)
        return data;
    }
);
