import { Reserve } from "../models/Reserve.js";

export const getReserves = async (req,res) => {
    const {dateAppointment} = req.body
    try {
        const reserves = await Reserve.findAll({
            where: {
                dateAppointment:dateAppointment
            }
        })
        res.status(200).json(reserves)
    } catch (error) {
        console.log(error)
    }
};