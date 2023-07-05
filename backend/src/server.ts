import { App } from './app';

import { AuthRoute } from './Modules';

const app = new App([new AuthRoute()]);

app.listen();
