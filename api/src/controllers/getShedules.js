import { getShedulesHelper } from "../helpers/getShedulesHelper.js"

export const getShedules = (req,res) => {
    try {
        const shedules = getShedulesHelper()
        return res.status(200).json(shedules)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}