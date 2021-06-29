"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
const dotenv = __importStar(require("dotenv"));
dotenv.config();
class Config {
    constructor() {
        this.SERVER_HOSTNAME = process.env.HOST || 'localhost';
        this.SERVER_PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 5080;
        this.SERVER_BACKLOG = 5090;
        this.DB_HOST = process.env.DB_HOST;
        this.DB_NAME = process.env.DB_NAME;
        this.DB_USER = process.env.DB_USER;
        this.DB_PASS = process.env.DB_PASS;
        this.DB_DEBUG = process.env.DB_DEBUG;
        this.DB_STRING = process.env.DB_STRING;
    }
}
exports.Config = Config;
//# sourceMappingURL=config.js.map