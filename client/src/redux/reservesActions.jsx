import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getAllReserves = createAsyncThunk(
    'reserves/getReserves',
    async (dateAppointment) => {
        const { data } = await axios.get(`/reserves/${dateAppointment}`)
        return data
    }
)

export const createReserve = createAsyncThunk(
    "reserves/createReserve",
    async (infoReserve) => {
        const { data } = await axios.post("/reserves", infoReserve)
        console.log(infoReserve)
        console.log(data)
    }
)