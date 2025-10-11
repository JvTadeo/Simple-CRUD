import { HashUtils } from "@/utils/hashUtils";
import { IAuth, IRegister } from "./auth.interface";
import { UserRepository } from "@/respository/user.repository";
import { HttpStatusCode } from "axios";
import { TokenUtils } from "@/utils/tokenUtils";

export class AuthService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    public async login({ email, password } : IAuth) {
        // Find a user by email
        const user = await this.userRepository.findUserByEmail(email);

        if (user == undefined) {
            return {
                message: 'User not found',
                code: HttpStatusCode.NotFound
            }
        }
        
        // Check password
        const passwordMatch = await HashUtils.compareHash(password, user.password);


        if (!passwordMatch) {
            return {
                message: 'Invalid password',
                code: HttpStatusCode.BadRequest
            }
        }

        // Token
        const token = await TokenUtils.signToken(user);
        return {
            id: user.id,
            email: user.email,
            token
        }
    }
    public async registter({email, password} : IRegister) {
        const existingUser = await this.userRepository.findUserByEmail(email);

        // Check if email already existst
        if (existingUser) {
            return {
                message: 'User already exists',
                code: HttpStatusCode.Conflict
            }
        }

        const passwordHash = await HashUtils.generateHash(password);

        return await this.userRepository.createUser({ email, password: passwordHash });
    }
}