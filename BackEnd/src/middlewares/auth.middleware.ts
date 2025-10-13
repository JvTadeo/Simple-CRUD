import type { Request, Response, NextFunction } from "express";
import { TokenUtils } from "@/utils/tokenUtils";
import { HttpStatusCode } from "axios";
import { customLogger } from "@/utils/customLogger";

export function authMiddleware(req: Request, res:Response, next: NextFunction) {
    const token = req.headers['authorization']?.split(' ')[1] as string;

    if (token == null) {
        return res.status(HttpStatusCode.Unauthorized).json({
            message: 'No token provided'
        })
    }

    const decodedToken : any = TokenUtils.verifyToken(token);

    if (decodedToken == null) {
        return res.status(HttpStatusCode.Unauthorized).json({
            message: 'User not authenticated'
        })
    }

    customLogger.success(`[AUTH-MIDDLEWARE] - User authenticated successfully - ${decodedToken.email}`);

    next();
}