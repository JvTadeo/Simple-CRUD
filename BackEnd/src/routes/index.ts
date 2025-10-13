import type { Request, Response } from "express";
import { Router } from "express";
import { authMiddleware } from "@/middlewares/auth.middleware";
import userRouter from './user.router'
import authRouter from './auth.router'
import productRouter from './product.router'

const router = Router();

router.get('/health-check', (req: Request, res: Response) => {
    res.status(200).json({
        message: 'OK',
        time: new Date()
    })
})

router.use('/auth', authRouter);

router.use(authMiddleware)

router.use('/user', userRouter);
router.use('/product', productRouter);

export default router;