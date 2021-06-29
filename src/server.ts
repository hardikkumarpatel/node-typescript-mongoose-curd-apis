import { Logging } from './config/logging';
import { Config } from './config/config';
import { App } from './app';

const _appServer: App = new App();
const _logging: Logging = new Logging();
const _config: Config = new Config();
_appServer.app.listen(_config.SERVER_PORT, _config.SERVER_HOSTNAME, _config.SERVER_BACKLOG, () => {
    _logging.infoMessage('Server', `Server is running on port:${_config.SERVER_PORT}`);
});
