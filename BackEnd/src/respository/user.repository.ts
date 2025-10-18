import { prisma } from "@/database";
import { ICreateUser, IUpdateUser } from "@/features/user/user.interface";

export class UserRepository {
    public async createUser({ email, password} : ICreateUser) {
        return await prisma.user.create({
            data: {
                email,
                password
            }
        })
    }
    public async updateUser({id, email, password } : IUpdateUser) {
        return await prisma.user.update({
            where: {
                id
            },
            data: {
                email,
                password
            }
        })
    }
    public async deleteUser(id: string) {
        return await prisma.user.delete({
            where: {
                id
            }
        })
    }
    public async findUserByEmail(email: string) {
        return await prisma.user.findUnique({
            where: {
                email
            }
        })
    }
}