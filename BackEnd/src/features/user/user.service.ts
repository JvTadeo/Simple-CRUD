import { HttpStatusCode } from "axios";
import { UserRepository } from "@/respository/user.repository";
import { HashUtils } from "@/utils/hashUtils";
import { IUpdateUser } from "./user.interface";

export class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    public async updateUser({ email, password, id } : IUpdateUser) {
        return await this.userRepository.updateUser({
            id,
            email,
            password: password ? await HashUtils.generateHash(password) : undefined
        })
    }
    public async deleteUser(id: string) {
        return await this.userRepository.deleteUser(id);
    }
}