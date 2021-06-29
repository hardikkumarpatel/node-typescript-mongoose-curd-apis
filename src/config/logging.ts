export class Logging {
    constructor() {}

    logging = (): string => {
        return new Date().toISOString();
    };

    infoMessage = (namespace: string, message: string, object?: any) => {
        if (object) console.log(`[${this.logging()}] [INFO] [${namespace}] [${message}]`, object);
        else console.log(`[${this.logging()}] [INFO] [${namespace}] [${message}]`);
    };

    errorMessage = (namespace: string, message: string, object?: any) => {
        if (object) console.error(`[${this.logging()}] [ERROR] [${namespace}] [${message}]`, object);
        else console.error(`[${this.logging()}] [ERROR] [${namespace}] [${message}]`);
    };

    warnMessage = (namespace: string, message: string, object?: any) => {
        if (object) console.warn(`[${this.logging()}] [WARN] [${namespace}] [${message}]`, object);
        else console.warn(`[${this.logging()}] [WARN] [${namespace}] [${message}]`);
    };

    debugMessage = (namespace: string, message: string, object?: any) => {
        if (object) console.debug(`[${this.logging()}] [DEBUG] [${namespace}] [${message}]`, object);
        else console.debug(`[${this.logging()}] [DEBUG] [${namespace}] [${message}]`);
    };
}
