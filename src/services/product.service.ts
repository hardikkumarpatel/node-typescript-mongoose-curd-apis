import ProductSchema from '../models/product.schema';
import { Product } from './../models/product.model';

class ProductService {
    constructor() {}

    create = async (request: Product, callback: any) => {
        const prod = new ProductSchema(request);
        prod.save(callback);
    };

    getList = async (callback: any) => {
        return ProductSchema.find(callback);
    };

    getById = async (productId: string, callback: any) => {
        return ProductSchema.findById(productId, callback);
    };

    deleteById = async (productId: string, callback: any) => {
        return ProductSchema.findByIdAndDelete(productId, callback);
    };

    updateById = async (productId: string, resource: Product, callback: any) => {
        return ProductSchema.findByIdAndUpdate(productId, resource, callback);
    };
}

export default ProductService;
