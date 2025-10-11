import { Router } from "express";
import type { Request, Response } from "express";
import userRouter from './user.router'
import authRouter from './auth.router'

const router = Router();

router.get('/health-check', (req: Request, res: Response) => {
    res.status(200).json({
        message: 'OK',
        time: new Date()
    })
})

router.use('/auth', authRouter);
router.use('/user', userRouter);

export default router;