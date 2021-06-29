import * as dotenv from 'dotenv';
dotenv.config();

export class Config {
    public SERVER_HOSTNAME: string;
    public SERVER_PORT: number;
    public SERVER_BACKLOG: number;
    public DB_HOST: string;
    public DB_NAME: string;
    public DB_USER: string;
    public DB_PASS: string;
    public DB_DEBUG: string;
    public DB_STRING: string;

    constructor() {
        this.SERVER_HOSTNAME = process.env.HOST || 'localhost';
        this.SERVER_PORT = process.env.PORT ? parseInt(process.env.PORT as string, 10) : 5080;
        this.SERVER_BACKLOG = 5090;
        this.DB_HOST = process.env.DB_HOST;
        this.DB_NAME = process.env.DB_NAME;
        this.DB_USER = process.env.DB_USER;
        this.DB_PASS = process.env.DB_PASS;
        this.DB_DEBUG = process.env.DB_DEBUG;
        this.DB_STRING = process.env.DB_STRING;
    }
}
