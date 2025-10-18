import type { Request, Response } from "express";
import { HttpStatusCode } from "axios";
import { UserService } from "./user.service";
import { customLogger } from "@/utils/customLogger";

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();

        // Binds
        this.updateUser = this.updateUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    public async updateUser(req: Request, res: Response) {
        const { id } = req.params;
        const { email, password } = req.body;

        await this.userService.updateUser({
            id,
            email,
            password
        })
        .then((data: any) => {
            customLogger.success('[USER-CONTROLLER] - User data updated successfully')
            res.status(HttpStatusCode.Ok).json({
                message: 'User data updated successfully'
            })
        })
        .catch((error) => {
            customLogger.error('[USER-CONTROLLER] - Failed to update user data')
            res.status(HttpStatusCode.InternalServerError).json({
                message: 'Something went wrong'
            })
        })
    }
    public async deleteUser(req: Request, res:Response) {
        const { id } = req.params;

        await this.userService.deleteUser(id)
        .then(() => {
            customLogger.success('[USER-CONTROLLER] - User data deleted successfully')
            res.status(HttpStatusCode.Ok).json({
                message: 'User data deleted successfully'
            });
        })
        .catch((error) => {
            console.log(error);
            customLogger.error('[USER-CONTROLLER] - Failed to delete user data')
            res.status(HttpStatusCode.InternalServerError).json({
                message: 'Something went wrong'
            })
        })
    }
}