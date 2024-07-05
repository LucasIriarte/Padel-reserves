import { Sequelize } from "sequelize";
import { Reserve } from "../models/Reserve.js";
import { botWhatsapp } from "../botWhatsapp/botWhatsapp.js";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config()

export const postReserveHelper = async (dataReserve) => {
    const PORT_BAILEYS = process.env.PORT_BAILEYS
    const { userName, dateAppointment, shiftStart, shiftEnd, phoneNumber, userId } = dataReserve
    // nos fijamos que no falte datos
    if (!userName || !dateAppointment || !shiftStart || !shiftEnd || !phoneNumber || !userId) {
        return "fields are required"
    }
    //No se puede empezar antes de terminar
    if (shiftStart >= shiftEnd) {
        return "El horario de inicio no puede ser menor que el final"
    }
    //buscamos turnos que inicien entre las horas que se quiera alquilar
    const findReserve = await Reserve.findAll({
        where: {
            dateAppointment: dateAppointment,
            [Sequelize.Op.or]: [
                //Un turno nuevo comienza y termina al mismo tiempo que uno en la bd
                {
                    shiftStart: shiftStart,
                    shiftEnd: shiftEnd
                },
                //Un turno nuevo empieza antes de la bd y terminan en el mismo horario
                {
                    shiftStart: { [Sequelize.Op.gt]: shiftStart },
                    shiftEnd: shiftEnd
                },
                //Un turno nuevo empieza entre medio de un turno en la bd
                {
                    shiftStart: { [Sequelize.Op.lt]: shiftEnd },
                    shiftEnd: { [Sequelize.Op.gt]: shiftEnd }
                },
                //Un turno nuevo termina entre medio de un turno en la bd
                {
                    shiftEnd: { [Sequelize.Op.gt]: shiftStart },
                    shiftStart: { [Sequelize.Op.lt]: shiftStart }
                },
                //Un turno nuevo abarca un turno completo en la bd
                {
                    shiftStart: { [Sequelize.Op.gt]: shiftStart },
                    shiftEnd: { [Sequelize.Op.lt]: shiftEnd }
                }
            ]
        }
    });

    //si hay algun turno ponemos que hay un turno encontrado
    if (findReserve.length > 0) {
        return "that shift has already been taken"
    }
    //si no hay ningun turno encontrado se crea el turno
    await Reserve.create({ userName, dateAppointment, shiftStart, shiftEnd, phoneNumber, userId })
    await axios.post(`http://localhost:${PORT_BAILEYS}/send-message`,{userName, dateAppointment, shiftStart, shiftEnd, phoneNumber})
    return "Reserve created successfull!"
}