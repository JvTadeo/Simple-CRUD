import jwt from 'jsonwebtoken';

function signToken(data: any) {
    return jwt.sign(data, process.env.SECRET as string, {
        expiresIn: '1d'
    });
}

function verifyToken(token: string) {
    return jwt.verify(token, process.env.SECRET as string);
}

export const TokenUtils = { signToken, verifyToken };