import { getBookingHelper } from "../helpers/getBookingHelper.js"


export const getBooking = async (req, res) => {
    try {
        const { payload, dateStand } = req.query
        const dateInfo = { payload, dateStand }
        const date = getBookingHelper(dateInfo)
        return res.status(200).send(date)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}