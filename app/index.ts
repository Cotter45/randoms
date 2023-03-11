import { Server } from '@cotter45/noderjs';
import cors = require('cors');
import compression from 'compression';
import toobusy from 'toobusy-js';

import { initConfig } from './config';
import apiRouter from './routes';

const initApp = async () => {
  const config = await initConfig();
  /**
   * Server setup and configuration
   */
  const server = new Server(config);

  
  server.use(cors());
  server.use(compression());
  server.use((req: any, res: any, next: any) => {
    if (toobusy()) {
      return {
        status: 503,
        message: 'Server is busy',
      };
    } else {
      next();
    }
  });

  server.useRouter(apiRouter);
  server.listen();
};

initApp();
