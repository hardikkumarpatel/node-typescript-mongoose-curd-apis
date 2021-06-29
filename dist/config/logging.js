"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logging = void 0;
class Logging {
    constructor() {
        this.logging = () => {
            return new Date().toISOString();
        };
        this.infoMessage = (namespace, message, object) => {
            if (object)
                console.log(`[${this.logging()}] [INFO] [${namespace}] [${message}]`, object);
            else
                console.log(`[${this.logging()}] [INFO] [${namespace}] [${message}]`);
        };
        this.errorMessage = (namespace, message, object) => {
            if (object)
                console.error(`[${this.logging()}] [ERROR] [${namespace}] [${message}]`, object);
            else
                console.error(`[${this.logging()}] [ERROR] [${namespace}] [${message}]`);
        };
        this.warnMessage = (namespace, message, object) => {
            if (object)
                console.warn(`[${this.logging()}] [WARN] [${namespace}] [${message}]`, object);
            else
                console.warn(`[${this.logging()}] [WARN] [${namespace}] [${message}]`);
        };
        this.debugMessage = (namespace, message, object) => {
            if (object)
                console.debug(`[${this.logging()}] [DEBUG] [${namespace}] [${message}]`, object);
            else
                console.debug(`[${this.logging()}] [DEBUG] [${namespace}] [${message}]`);
        };
    }
}
exports.Logging = Logging;
//# sourceMappingURL=logging.js.map