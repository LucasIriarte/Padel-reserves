import { Router } from 'express';
const router = Router();
import reservesRoutes from './reserves.js';
import userRoutes from './user.js';


router.use('/reserves',reservesRoutes);
router.use('/users',userRoutes);



export default router