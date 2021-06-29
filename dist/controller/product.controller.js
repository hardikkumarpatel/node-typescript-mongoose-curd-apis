"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logging_1 = require("./../config/logging");
const product_service_1 = __importDefault(require("../services/product.service"));
class ProductController {
    constructor() {
        this.createProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                new logging_1.Logging().infoMessage('ProductController', `${req.url} : ${req.method}`);
                const prodresponse = new product_service_1.default().create(req.body);
                prodresponse
                    .then((response) => {
                    console.log(response);
                    res.status(200).send(response);
                })
                    .catch((error) => {
                    console.log(error);
                    res.status(500).send({ success: false, error: error.message });
                });
            }
            catch (error) {
                res.status(500).send({ success: false, error: error.message });
            }
        });
    }
}
exports.default = ProductController;
//# sourceMappingURL=product.controller.js.map