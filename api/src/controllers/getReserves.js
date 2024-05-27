import { getReservesHelpers } from "../helpers/getReserveHelper.js";
import { Reserve } from "../models/Reserve.js";

export const getReserves = async (req, res) => {
    try {
        const { date } = req.query
        const reserves = await getReservesHelpers(date)
        return res.status(200).json(reserves)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};