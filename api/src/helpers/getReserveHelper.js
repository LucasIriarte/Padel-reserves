import { Reserve } from "../models/Reserve.js";


export const getReservesHelpers = async (dateAppointment) => {
    const day = dateAppointment.slice(0, 2)
    const month = dateAppointment.slice(2, 4)
    const year = dateAppointment.slice(4, 8)
    const dateAppointmentFormated = `${day}/${month}/${year}`
    console.log(dateAppointmentFormated)
    const reserves = await Reserve.findAll({
        where: {
            dateAppointment:dateAppointmentFormated
        }
    })
    return reserves
}