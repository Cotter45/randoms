import { Router } from '@cotter45/noderjs';

import cocktails from '../resources/cocktails.json';

import type { ICtx } from '@cotter45/noderjs';

const cocktailsRouter = new Router('/cocktails');

cocktailsRouter.get('/', (ctx: ICtx) => {
  ctx.res.status(200).json(cocktails);
});

cocktailsRouter.get('/random_picture', (ctx: ICtx) => {
  const cocktail = cocktails[Math.floor(Math.random() * cocktails.length)];
  const picture = cocktail.image;
  ctx.res.status(200).json({ picture });
});

cocktailsRouter.get('/random_cocktail', (ctx: ICtx) => {
  const cocktail = cocktails[Math.floor(Math.random() * cocktails.length)];
  ctx.res.status(200).json(cocktail);
});

cocktailsRouter.get('/ingredients', (ctx: ICtx) => {
  const ingredients = cocktails.reduce((acc, cocktail) => {
    cocktail.ingredients.forEach((ingredient) => {
      if (!acc.includes(ingredient.name)) {
        acc.push(ingredient.name);
      }
    });
    return acc;
  }, [] as string[]);
  ctx.res.status(200).json(ingredients);
});

cocktailsRouter.get('/ingredients/:ingredient', (ctx: ICtx) => {
  const { ingredient } = ctx.req.params;

  const cocktailsWithIngredient = cocktails.filter((cocktail) => {
    return cocktail.ingredients.some((i) => {
      const lowerIngredient = i.name.toLowerCase();
      const splitIngredient = lowerIngredient.split(' ');
      return splitIngredient.includes(ingredient);
    });
  });

  ctx.res.status(200).json(cocktailsWithIngredient);
});

cocktailsRouter.get('/:id', (ctx: ICtx) => {
  const { id } = ctx.req.params;
  const cocktail = cocktails.find((c) => c.id === +id);
  if (cocktail) {
    ctx.res.status(200).json(cocktail);
  } else {
    ctx.res.status(404).json({ message: 'Cocktail not found' });
  }
});

export default cocktailsRouter;
