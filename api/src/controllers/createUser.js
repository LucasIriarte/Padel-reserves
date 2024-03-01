import { User } from "../models/User.js"

export const createUser = async (req,res) => {
    const { name, email } = req.body
    const [user, created] = await User.findOrCreate({
        where: {
            name,
            email
        }
    })
    console.log(user, created)

    return res.send("entrando en create user")
}