import { Router } from 'express';
const router = Router();
import reservesRoutes from './reserves.js';
import userRoutes from './user.js';
import bookingRoutes from './booking.js';


router.use('/reserves',reservesRoutes);
router.use('/users',userRoutes);
router.use('/booking',bookingRoutes);



export default router