import { User } from "../models/User.js"


export const getUserHelper = async () => {
    const users = await User.findAll()
    return users
}