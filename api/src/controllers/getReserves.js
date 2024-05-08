import { getReservesHelpers } from "../helpers/getReserveHelper.js";
import { Reserve } from "../models/Reserve.js";

export const getReserves = async (req, res) => {
    try {
        const { dateAppointment } = req.params
        const reserves = await getReservesHelpers(dateAppointment)
        return res.status(200).json(reserves)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};