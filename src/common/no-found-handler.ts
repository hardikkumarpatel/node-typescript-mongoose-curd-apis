import { Logging } from './../config/logging';
import { Request, Response } from 'express';

export class NoFoundHandler {
    private _logging: Logging;
    constructor() {
        this._logging = new Logging();
    }

    noResourceFoundHandler = (req: Request, res: Response) => {
        this._logging.errorMessage('NoFoundHandler', `${req.url} : ${req.method}`, req.ip);
        res.status(500).send('Request resource not found!');
    };
}
