import { User } from "../models/User.js"

export const createUser = async (req,res) => {
    try {
        const { name, email } = req.body
        const [user, created] = await User.findOrCreate({
            where: {
                name,
                email
            }
        })
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}