import { Reserve } from "../models/Reserve.js";


export const getReservesHelpers = async (date) => {
    const dateSplited = date.split("/")
    const dateAppointment = new Date(dateSplited[2], dateSplited[1], dateSplited[0])
    const dateAppointmentFormated = `${dateAppointment.getDate()}/${dateAppointment.getMonth()}/${dateAppointment.getFullYear()}`
    console.log(dateAppointmentFormated)
    const reserves = await Reserve.findAll({
        where: {
            dateAppointment:dateAppointmentFormated
        }
    })
    return reserves
}