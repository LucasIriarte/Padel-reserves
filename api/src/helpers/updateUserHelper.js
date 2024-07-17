import { where } from "sequelize"
import { User } from "../models/User.js"


export const updateUserHelper = async ({ userId }) => {
    const findUser = await User.update(
        {
            admin:true
        },
        {
        where: {
            id: userId
        }
    })
    if (!findUser) {
        return "User not found (Its your message jerk)"
    }
    return findUser
}