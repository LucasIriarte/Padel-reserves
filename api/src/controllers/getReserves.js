import { Reserve } from "../models/Reserve.js";

export const getReserves = async (req,res) => {
    const dateAppointment = req.params.dateAppointment
    const day = dateAppointment.slice(0,2)
    const month = dateAppointment.slice(2,4)
    const year = dateAppointment.slice(4,8)
    const dateAppointmentFormated = day + "/" + month + "/" + year

    try {
        const reserves = await Reserve.findAll({
            where: {
                dateAppointment:dateAppointmentFormated
            }
        })
        return res.status(200).json(reserves)
    } catch (error) {
        console.log(error)
    }
};