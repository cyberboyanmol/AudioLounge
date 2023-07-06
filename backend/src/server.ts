import { App } from './app';
import { AuthRoute } from './modules';
const app = new App([new AuthRoute()]);

app.listen();
