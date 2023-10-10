import { Router } from 'express';
const router = Router();
import reservesRoutes from './reserves.js';
import userRoutes from './user.js';


router.use('/reserves',reservesRoutes);
router.use('/user',userRoutes);



export default router