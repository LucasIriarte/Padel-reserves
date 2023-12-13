import { Reserve } from "../models/Reserve.js";

export const postReserve = async (req,res) => {
    const { userName } = req.body
    const newReserve = await Reserve.create({userName})
    res.send("reserve created")
};