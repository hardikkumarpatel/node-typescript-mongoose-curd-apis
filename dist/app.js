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
const config_1 = require("./config/config");
const no_found_handler_1 = require("./common/no-found-handler");
const logging_1 = require("./config/logging");
const express_1 = __importDefault(require("express"));
const model_1 = __importDefault(require("./models/model"));
const product_router_1 = __importDefault(require("./routers/product.router"));
const app = express_1.default();
if (!new config_1.Config().SERVER_PORT) {
    new logging_1.Logging().errorMessage('App', 'PORT is not defined!');
    process.exit(-1);
}
() => __awaiter(void 0, void 0, void 0, function* () {
    model_1.default;
});
app.use(express_1.default.json());
// app.use('/', (req: Request, res: Response) => {
//     new Logging().infoMessage('App', `${req.url} : ${req.method}`);
//     res.status(200).send('Welcome to backend!');
// });
app.use('/product', product_router_1.default);
app.use(no_found_handler_1.NoFoundHandler);
exports.default = app;
//# sourceMappingURL=app.js.map