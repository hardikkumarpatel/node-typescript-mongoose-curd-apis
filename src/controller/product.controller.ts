import { Logging } from './../config/logging';
import { Request, Response } from 'express';
import ProductService from '../services/product.service';
import { Product } from 'models/product.model';

class ProductController {
    private _productService: ProductService;
    private _logging: Logging;
    constructor() {
        this._productService = new ProductService();
        this._logging = new Logging();
    }

    createProduct = async (req: Request, res: Response) => {
        try {
            this._logging.infoMessage('ProductController', `${req.url} : ${req.method}`);
            this._productService.create(req.body, (error: any, response: Product) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(response);
                }
            });
        } catch (error) {
            res.status(500).send({ success: false, error: error.message });
        }
    };

    getProductList = (req: Request, res: Response) => {
        try {
            this._logging.infoMessage('ProductController', `${req.url} : ${req.method}`);
            this._productService.getList((error: any, response: Product[]) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(response);
                }
            });
        } catch (error) {
            res.status(500).send({ success: false, error: error.message });
        }
    };

    getProductById = (req: Request, res: Response) => {
        try {
            this._logging.infoMessage('ProductController', `${req.url} : ${req.method}`);
            this._productService.getById(req.body.id, (error: any, response: Product[]) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(response);
                }
            });
        } catch (error) {
            res.status(500).send({ success: false, error: error.message });
        }
    };

    deleteProductById = (req: Request, res: Response) => {
        try {
            this._logging.infoMessage('ProductController', `${req.url} : ${req.method}`);
            this._productService.deleteById(req.body.id, (error: any, response: Product) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(response);
                }
            });
        } catch (error) {
            res.status(500).send({ success: false, error: error.message });
        }
    };

    updateProductById = (req: Request, res: Response) => {
        try {
            this._logging.infoMessage('ProductController/:id', `${req.url} : ${req.method}`);
            this._productService.updateById(req.params.id, req.body, (error: any, response: Product) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(response);
                }
            });
        } catch (error) {
            res.status(500).send({ success: false, error: error.message });
        }
    };
}

export default ProductController;
