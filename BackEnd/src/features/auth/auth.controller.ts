import type { Request, Response } from "express";
import { IAuth, IRegister } from "./auth.interface";
import { AuthService } from "./auth.service";
import { customLogger } from "@/utils/customLogger";
import { HttpStatusCode } from "axios";

export class AuthController {
    private authService: AuthService;

    constructor() {
        this.authService = new AuthService();

        // Binds
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
    }

    public async login(req: Request, res: Response) {
        const { email, password } = req.body as IAuth;

        if (email == '' || password == '') {
            return res.status(400).json({
                message: 'Email and password are required'
            })
        }

        await this.authService.login({ email, password })
        .then((data: any) => {
            // Error
            if (data.code) {
                customLogger.error(`[AUTH-CONTROLLER] - ${data.message}`);
                return res.status(data.code).json(data);
            }

            customLogger.success(`[AUTH-CONTROLLER] - User logged in successfully`);
            res.status(200).json(data);
        })
        .catch((error) => {
            customLogger.error('[AUTH-CONTROLLER] - Failed to Login')
            res.status(HttpStatusCode.InternalServerError).json({
                message: "Something went wrong"
            });
        })
    }
    public async register(req: Request, res: Response) {
        const { email, password } = req.body as IRegister;

        // Validations
        if (email == '' || password == '') {
            return res.status(HttpStatusCode.BadRequest).json({
                message: 'Email and password are required'
            })
        }
        await this.authService.registter({ email, password })
        .then((data: any) => {

            if (data.code !== undefined) {
                customLogger.error('[USER-CONTROLLER] - Email already exists');
                return res.status(data.code).json(data);
            }
            
            customLogger.success(`[AUTH-CONTROLLER] - User created successfully`);
            res.status(HttpStatusCode.Created).json({
                message: 'User created successfully'
            });
        })
        .catch((error) => {
            customLogger.error(error.message);
            res.status(HttpStatusCode.InternalServerError);
        })
    }
}