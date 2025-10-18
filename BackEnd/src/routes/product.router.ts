import { Router } from "express";
import { ProductController } from "@/features/product/product.controller";

const router = Router();
const productController = new ProductController();

router.get('/', productController.getProducts)
router.post('/', productController.createProduct)
router.put('/:id', productController.updateProduct)
router.delete('/:id', productController.deleteProduct)

export default router;