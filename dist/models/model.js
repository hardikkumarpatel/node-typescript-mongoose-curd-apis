"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logging_1 = require("./../config/logging");
const config_1 = require("./../config/config");
const mongoose_1 = __importDefault(require("mongoose"));
exports.default = mongoose_1.default.connect(new config_1.Config().DB_STRING, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err)
        new logging_1.Logging().errorMessage('DBModel', err);
    new logging_1.Logging().infoMessage('DBModel', 'Connecting to MongoDB');
});
//# sourceMappingURL=model.js.map