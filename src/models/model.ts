import { Logging } from './../config/logging';
import { Config } from './../config/config';
import mongoose from 'mongoose';

// export default mongoose.connect(
//     new Config().DB_STRING,
//     {
//         useCreateIndex: true,
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     },
//     (err: any) => {
//         if (err) new Logging().errorMessage('DBModel', err);
//         new Logging().infoMessage('DBModel', 'Connecting to MongoDB');
//     }
// );

export class MongoClient {
    public mongooseConnection;
    private config: Config;
    private logging: Logging;
    constructor() {
        this.config = new Config();
        this.logging = new Logging();
        this.mongooseConnection = mongoose.connect(
            this.config.DB_STRING,
            {
                useCreateIndex: true,
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            (error: any) => {
                if (error) this.logging.errorMessage('MongooseDBModel', error);
                this.logging.infoMessage('MongooseDBModel', 'Connecting to mongoDB!');
            }
        );
    }
}
