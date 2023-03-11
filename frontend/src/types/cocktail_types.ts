
export type CocktailPicture = {
  cocktail_id: number,
  location: string
}

export type Ingredient = {
  name: string,
  abv: number,
  taste: string,
  Cocktails?: Cocktail[],
}

export type CocktailIngredients = {
  unit: string,
  amount: number,
  type: string,
  label: string,
  ingredient: number,
  special: string,
  alcohol_id: number,
  cocktail_id: number,
  Ingredients?: Ingredient[]
}

export type Cocktail = {
  name: string,
  glass: string,
  category: string,
  garnish: string,
  preparation: string,
  Ingredients?: Ingredient[],
  CocktailIngredients?: CocktailIngredients[],
}