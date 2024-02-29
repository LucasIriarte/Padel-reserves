import { Sequelize } from "sequelize";
import { Reserve } from "../models/Reserve.js";

export const postReserve = async (req,res) => {
    const { userName, dateAppointment, shiftStart, shiftEnd, phoneNumber } = req.body
    console.log(shiftStart > shiftEnd)
    // nos fijamos que no falte datos
    if(!userName || !dateAppointment || !shiftStart || !shiftEnd || !phoneNumber) {
        return res.send("fields are required")
    }
    //No se puede empezar antes de terminar
    if(shiftStart >= shiftEnd){
        return res.send("El horario de inicio no puede ser menor que el final")
    }
    //buscamos turnos que inicien entre las horas que se quiera alquilar
    const findReserve = await Reserve.findAll({
        where: {
            dateAppointment: dateAppointment,
            [Sequelize.Op.or]: [
                //Un turno nuevo empieza entre medio de un turno en la bd
                {
                    shiftStart: {[Sequelize.Op.lt]: shiftEnd},
                    shiftEnd: {[Sequelize.Op.gt]: shiftEnd}
                },
                //Un turno nuevo termina entre medio de un turno en la bd
                {
                    shiftEnd: {[Sequelize.Op.gt]: shiftStart},
                    shiftStart: {[Sequelize.Op.lt]: shiftStart}
                },
                //Un turno nuevo abarca un turno completo en la bd
                {
                    shiftStart: {[Sequelize.Op.gt]: shiftStart},
                    shiftEnd: {[Sequelize.Op.lt]: shiftEnd}
                }
            ]
        }
    });
    
    //si hay algun turno ponemos que hay un turno encontrado
    if(findReserve.length > 0) {
        return res.send("Ese turno ya fue tomado")
    }
    //si no hay ningun turno encontrado se crea el turno
    Reserve.create({ userName, dateAppointment, shiftStart, shiftEnd, phoneNumber })
    return res.send("turno creado")
};