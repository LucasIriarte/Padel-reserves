import { Reserve } from "../models/Reserve.js";

export const getReserves = async (req,res) => {
    try {
        const reserves = await Reserve.findAll()
        console.log(reserves)
        res.status(200).json(reserves)
    } catch (error) {
        console.log(error)
    }
};