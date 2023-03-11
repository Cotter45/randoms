import { Router } from '@cotter45/noderjs';

import parks from '../resources/parks.json';

import type { ICtx } from '@cotter45/noderjs';

const parksRouter = new Router('/parks');

parksRouter.get('/', (ctx: ICtx) => {
  ctx.res.status(200).json(parks);
});

parksRouter.get('/random_picture', (ctx: ICtx) => {
  const park = parks[Math.floor(Math.random() * parks.length)];
  const picture = park.images[Math.floor(Math.random() * park.images.length)];
  ctx.res.status(200).json({ picture });
});

parksRouter.get('/random_park', (ctx: ICtx) => {
  const park = parks[Math.floor(Math.random() * parks.length)];
  ctx.res.status(200).json(park);
});

parksRouter.get('/:id', (ctx: ICtx) => {
  const { id } = ctx.req.params;
  const park = parks.find((p) => p.id === +id);
  if (park) {
    ctx.res.status(200).json(park);
  } else {
    ctx.res.status(404).json({ message: 'Park not found' });
  }
});


export default parksRouter;
