import { Request, Response } from "express";
import { ProductService } from "./product.service";
import { customLogger } from "@/utils/customLogger";
import { HttpStatusCode } from "axios";
import { IProduct } from "./product.interface";

export class ProductController {
    private productService: ProductService

    constructor() {
        this.productService = new ProductService();

        // Bind
        this.getProducts = this.getProducts.bind(this);
        this.createProduct = this.createProduct.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    public async getProducts(req: Request, res: Response) {
        await this.productService.getProducts()
        .then((data) => {
            customLogger.success('[PRODUCT-CONTROLLER] - Get all products');
            res.status(HttpStatusCode.Ok).json(data);
        })
        .catch((error) => {
            customLogger.error('[PRODUCT-CONTROLLER] - Failed to Login')
            res.status(HttpStatusCode.InternalServerError).json({
                message: "Something went wrong"
            });
        })
    }
    public async createProduct(req: Request, res:Response) {
        const product = req.body as IProduct;

        await this.productService.createProduct(product)
        .then(() => {
            customLogger.success('[PRODUCT-CONTROLLER] - Product created successfully');
            res.status(HttpStatusCode.Created).json({
                message: 'Product created successfully'
            })
        })
        .catch((error) => {
            console.log(error)
            customLogger.error('[PRODUCT-CONTROLLER] - Failed to create product');
            res.status(HttpStatusCode.InternalServerError).json({
                message: "Something went wrong"
            });
        })
    }
    public async updateProduct(req: Request, res: Response) {
        const { id } = req.params;
        const product = req.body as IProduct;

        await this.productService.updateProduct(id, product)
        .then((data:any) => {

            if (data.code) {
                customLogger.error(`[PRODUCT-CONTROLLER] - ${data.message}`);
                res.status(data.code).json(data);
            }

            customLogger.success('[PRODUCT-CONTROLLER] - Product updated successfully');

            res.status(HttpStatusCode.Ok).json({
                message: 'Product updated successfully'
            })
        })
        .catch((error) => {
            console.log(error)
            customLogger.error('[PRODUCT-CONTROLLER] - Failed to update product');
            res.status(HttpStatusCode.InternalServerError).json({
                message: "Something went wrong"
            });
        })
    }
    public async deleteProduct(req: Request, res: Response) {
        const { id } = req.params;
        await this.productService.deleteProduct(id)
        .then((data: any) => {

            if (data.code) {
                customLogger.error(`[PRODUCT-CONTROLLER] - ${data.message}`);
                res.status(data.code).json(data);
            }

            customLogger.success('[PRODUCT-CONTROLLER] - Product deleted successfully');

            res.status(HttpStatusCode.Ok).json({
                message: 'Product deleted successfully'
            })
        })
        .catch((error) => {
            console.log(error)
            customLogger.error('[PRODUCT-CONTROLLER] - Failed to delete product');
            res.status(HttpStatusCode.InternalServerError).json({
                message: "Something went wrong"
            });
        })
    }
}