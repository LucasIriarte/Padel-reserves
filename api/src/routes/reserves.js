import { Router } from "express";
import { getReserves } from "../controllers/getReserves.js";
import { postReserve } from "../controllers/postReserve.js";
const router = Router();

router.get('/:dateAppointment', getReserves)
router.post('/', postReserve)

export default router;