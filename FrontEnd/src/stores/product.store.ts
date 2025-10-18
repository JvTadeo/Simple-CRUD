import { ServerAPI } from "../api";
import type { IProduct } from "../interfaces/product.interface";
import { defineStore } from "pinia";
import { showToast } from "../utils/toast";

export const useProductStore = defineStore('product', {
    state: () => ({
        loading: false as boolean,
        products: [] as IProduct[],
        newProduct: {} as IProduct,
        selectedProduct: {} as IProduct,
        isConfirmDeleteOpen: false as boolean,
        isEditProductOpen: false as boolean,
        isCreateProductOpen: false as boolean,
    }),
    actions: {
        async getProducts() {
            await ServerAPI.getProducts()
            .then(({data}) => {
                this.products = data;
            })
            .catch(() => {
                showToast('error', 'Product', 'Failed to get products.');
            })
        },
        async createProduct() {
            this.loading = true;
            const data = {
                name: this.newProduct.name,
                price: this.newProduct.price,
                description: this.newProduct.description
            }

            await ServerAPI.createPrdocut(data)
            .then(({data}) => {
                showToast('success', 'Product', 'Product created successfully');
            })
            .catch(() => {
                showToast('error', 'Product', 'Failed to create product');
            })
            
            this.loading = false;
        },
        async editProduct() {
            this.loading = true;
            await ServerAPI.editProduct(this.selectedProduct)
            .then(({data}) => {
                showToast('success', 'Product', 'Product edit sucessfully')
            })
            .catch(() => {
                showToast('error', 'Product', 'Failed to edit product');
            })
            this.loading = false;
        },
        async deleteProduct() {
            this.loading = true;
            await ServerAPI.deleteProduct(this.selectedProduct.id)
            .then(({data}) => {
                showToast('success', 'Product', 'Product deleted successfully');
            })
            .catch(() => {
                showToast('error', 'Product', 'Failed to delete product');
            })
            this.loading = false;
        },
        // ----- Others
        openEditProductModal(product: IProduct) {
            this.selectedProduct = product;
            this.isEditProductOpen = true;
        },
        openDeleteModal(product: IProduct) {
            this.selectedProduct = product;
            this.isConfirmDeleteOpen = true;
        }
    }
})