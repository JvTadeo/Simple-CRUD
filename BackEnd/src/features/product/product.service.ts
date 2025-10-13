import { ProductRepository } from "@/respository/product.repository";
import { IProduct } from "./product.interface";
import { HttpStatusCode } from "axios";

export class ProductService {
    private productRepository: ProductRepository;

    constructor() {
        this.productRepository = new ProductRepository();
    }

    public async getProducts() {
        return await this.productRepository.getProducts();
    }
    public async createProduct(product: IProduct) {
        return await this.productRepository.createProduct(product);
    }
    public async updateProduct(id: string, product: IProduct) {
        if (await !this.productExists(id)) {
            return {
                message: 'Product not found',
                code: HttpStatusCode.NotFound
            }
        }

        return await this.productRepository.updateProduct(id, product);
    }
    public async deleteProduct(id: string) {
        if (await !this.productExists(id)) {
            return {
                message: 'Product not found',
                code: HttpStatusCode.NotFound
            }
        }

        return await this.productRepository.deleteProduct(id);
    }
    
    // ---- Private
    private async productExists(id: string) : Promise<boolean> {
        return await this.productRepository.findProductById(id) != null;
    }
}