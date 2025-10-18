import { prisma } from "@/database";
import { IProduct } from "@/features/product/product.interface";

export class ProductRepository {
    public async getProducts() {
        return await prisma.product.findMany({
            select: {
                id: true,
                name: true,
                price: true,
                description: true,
            }
        });
    }
    public async createProduct(product: IProduct) {
        return await prisma.product.create({
            data: product
        })
    }
    public async updateProduct(id: string, product: IProduct) {
        return await prisma.product.update({
            where: {
                id
            },
            data: product
        })
    }
    public async deleteProduct(id: string) {
        return await prisma.product.delete({
            where: {
                id
            }
        })
    }
    public async findProductById(id: string) {
        return await prisma.product.findUnique({
            where: {
                id
            }
        })
    }
}