import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getAllReserves = createAsyncThunk(
    'reserves/getReserves',
    async () => {
        const {data} = await axios.get('/reserves')
        return data
    }
)