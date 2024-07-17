import { updateUserHelper } from "../helpers/updateUserHelper.js";




export const updateUser = async (req,res) => {
    try {
        const { userId } = req.body
        const response = await updateUserHelper({userId})
        res.status(200).send(response)
    } catch (error) {
        console.log(error)
    }
}