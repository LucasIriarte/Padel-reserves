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
        console.log(error)
    }
}