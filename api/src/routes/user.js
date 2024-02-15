import { Router } from "express";
import { createUser } from "../controllers/createUser.js";
const router = Router();

router.get('/', createUser)

export default router;