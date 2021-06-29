import { MongoClient } from './models/model';
import { WelcomeMessage } from './common/welcome-message';
import { ProductRouter } from './routers/product.router';
import { Config } from './config/config';
import { NoFoundHandler } from './common/no-found-handler';
import { Logging } from './config/logging';
import express from 'express';

export class App {
    public app;
    private _config: Config;
    private _logging: Logging;
    private _productRouter: ProductRouter;
    private _noResourceFoundHandler: NoFoundHandler;
    private _welcomeMessage: WelcomeMessage;
    private _mongoose: MongoClient;
    constructor() {
        this.app = express();
        this._config = new Config();
        this._logging = new Logging();
        this._productRouter = new ProductRouter();
        this._noResourceFoundHandler = new NoFoundHandler();
        this._welcomeMessage = new WelcomeMessage();
        this._mongoose = new MongoClient();
        this.checkServerHelth();
        this.connectMongoDB();
        this.appMiddlewares();
        this.appStartup();
        this.appNoFoundHandler();
        this.appRouters();
    }

    checkServerHelth = () => {
        if (!this._config.SERVER_PORT) {
            this._logging.errorMessage('App', 'PORT is not defined!');
            process.exit(-1);
        }
    };

    connectMongoDB = () => {
        this._mongoose.mongooseConnection;
    };

    appStartup = () => {
        this.app.get('/', this._welcomeMessage.welcomeMessages)
    };

    appMiddlewares = () => {
        this.app.use(express.json());
    };

    appNoFoundHandler = () => {
        this.app.use('*', this._noResourceFoundHandler.noResourceFoundHandler);
    };

    appRouters = () => {
        this.app.use('/product', this._productRouter.router);
    };
}
