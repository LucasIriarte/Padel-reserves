import { getBookingHelper } from "../helpers/getBookingHelper.js";


export const getBooking = async (req, res) => {
    try {
        const date = new Date()
        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()
        return res.send(`${day}/${month}/${year}`)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}