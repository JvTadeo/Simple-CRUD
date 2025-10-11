import { Router } from "express";
import { UserController } from "@/features/user/user.controller";

const router = Router();
const userController = new UserController();

router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

export default router;
