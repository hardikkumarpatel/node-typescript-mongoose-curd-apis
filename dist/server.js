"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logging_1 = require("./config/logging");
const config_1 = require("./config/config");
const app_1 = __importDefault(require("./app"));
app_1.default.listen(new config_1.Config().SERVER_PORT, new config_1.Config().SERVER_HOSTNAME, new config_1.Config().SERVER_BACKLOG, () => {
    new logging_1.Logging().infoMessage('Server', `Server is running on port:${new config_1.Config().SERVER_PORT}`);
});
//# sourceMappingURL=server.js.map