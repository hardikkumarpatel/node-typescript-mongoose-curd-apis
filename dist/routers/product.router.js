"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_controller_1 = __importDefault(require("../controller/product.controller"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post("/createproduct", new product_controller_1.default().createProduct);
exports.default = router;
//# sourceMappingURL=product.router.js.map