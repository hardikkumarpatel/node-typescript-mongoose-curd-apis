import ProductController from '../controller/product.controller';
import express from 'express';

export class ProductRouter {
    public router;
    private _productController: ProductController;
    constructor() {
        this._productController = new ProductController();
        this.router = express.Router();
        this.configProductsRouters();
    }

    private configProductsRouters = () => {
        this.router.post('/createproduct', this._productController.createProduct);
        this.router.get('/getproducts', this._productController.getProductList);
        this.router.get('/getproductbyid', this._productController.getProductById);
        this.router.delete('/deleteproductbyid', this._productController.deleteProductById);
        this.router.put('/updateproductbyid/:id', this._productController.updateProductById);
    };
}
