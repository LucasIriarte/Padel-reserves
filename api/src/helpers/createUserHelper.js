import { User } from "../models/User.js"


export const createUserHelper = async (userData) => {
    const { name, email } = userData
    const [user] = await User.findOrCreate({
        where: {
            name,
            email
        }
    })
    return user
}