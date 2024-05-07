import { Router } from "express";
import { getShedules } from "../controllers/getShedules.js";


const router = Router()

router.get("/",getShedules)


export default router