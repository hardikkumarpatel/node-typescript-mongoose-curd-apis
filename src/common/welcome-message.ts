import { Request, Response } from 'express';
import { Logging } from './../config/logging';

export class WelcomeMessage {
    private _logging: Logging;
    constructor() {
        this._logging = new Logging();
    }

    welcomeMessages = (req: Request, res: Response) => {
        this._logging.infoMessage('WelomeMessage', `${req.url} : ${req.method}`);
        res.status(200).send('Welcome to backend!');
    };
}
