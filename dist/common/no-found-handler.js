"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoFoundHandler = void 0;
const logging_1 = require("./../config/logging");
const NoFoundHandler = (req, res) => {
    new logging_1.Logging().errorMessage('NoFoundHandler', `${req.url} : ${req.method}`, req.ip);
    res.status(500).send('Request resource not found!');
};
exports.NoFoundHandler = NoFoundHandler;
//# sourceMappingURL=no-found-handler.js.map