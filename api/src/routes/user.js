import { Router } from "express";
import { createUser } from "../controllers/createUser.js";
const router = Router();

router.post('/', createUser)

export default router;