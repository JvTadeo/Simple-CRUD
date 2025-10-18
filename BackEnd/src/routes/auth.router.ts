import { Router } from "express";
import { AuthController } from "@/features/auth/auth.controller";

const router = Router();
const authController = new AuthController();

router.post('/login', authController.login);
router.post('/register', authController.register);
router.get('/validate-token', authController.validateToken);

export default router;