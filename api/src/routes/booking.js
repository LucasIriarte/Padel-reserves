import { Router } from "express"
import { getBooking } from "../controllers/getBooking.js"

const router = Router()

router.get('/', getBooking)

export default router