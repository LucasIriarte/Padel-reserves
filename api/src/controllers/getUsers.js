import { getUserHelper } from "../helpers/getUsersHelper.js"



export const getUsers = async (req, res) => {
    try {
        const response = await getUserHelper()
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
    }
}