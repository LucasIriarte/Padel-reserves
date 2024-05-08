import { Sequelize } from "sequelize";
import { Reserve } from "../models/Reserve.js";
import { getShedules } from "./getShedules.js";
import { postReserveHelper } from "../helpers/postReserveHelper.js";

export const postReserve = async (req,res) => {
    try {
        const { userName, dateAppointment, shiftStart, shiftEnd, phoneNumber, userId } = req.body
        const dataReserve = {userName, dateAppointment, shiftStart, shiftEnd, phoneNumber, userId}
        const reserveCreated = await postReserveHelper(dataReserve)
        return res.status(200).json(reserveCreated)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};