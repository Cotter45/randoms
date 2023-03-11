import { Router } from '@cotter45/noderjs';

import parksRouter from './parks';
import cocktailsRouter from './cocktails';

import type { ICtx } from '@cotter45/noderjs';

const apiRouter = new Router('/api');

// Add routes or nested routers here
apiRouter.useRouter(parksRouter);
apiRouter.useRouter(cocktailsRouter);

apiRouter.get('/', (ctx: ICtx) => {
  ctx.res.status(200).json({
    message: 'Hello World',
  });
});

export default apiRouter;
