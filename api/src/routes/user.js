import { Router } from "express";
import { createUser } from "../controllers/createUser.js";
import { updateUser } from "../controllers/updateUser.js";
import { getUsers } from "../controllers/getUsers.js";
const router = Router();

router.post('/', createUser)
router.put('/', updateUser)
router.get('/', getUsers)

export default router;