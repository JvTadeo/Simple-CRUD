import type { IProduct } from "../interfaces/product.interface";
import { axiosCustom } from "./axios.custom";

export class ServerAPI {
    // Auth
    static async login(email: string, password: string) {
        return await axiosCustom.post('/auth/login', { email, password });
    }
    static async register(email: string, password: string) {
        return await axiosCustom.post('/auth/register', { email, password });
    }
    static async validateToken() {
        return await axiosCustom.get('/auth/validate-token');
    }
    // Products
    static async getProducts() {
        return await axiosCustom.get('/product');
    }
    static async createPrdocut(product: any) {
        return await axiosCustom.post('/product', product);
    }
    static async editProduct(product: IProduct) {
        return await axiosCustom.put(`/product/${product.id}`, product);
    }
    static async deleteProduct(id: string) {
        return await axiosCustom.delete(`/product/${id}`);
    }
}