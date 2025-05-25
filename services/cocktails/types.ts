export type Difficulty = 'Starter Sip' | 'Pro Pour' | 'Master Mix'; 

export interface Ingredient {
  name: string;
  quantity: string;
}

export interface CocktailSummary {
  id: string;
  name: string;
  image: {
    src: string;
    alt: string;
  };
}

export interface CocktailDetails extends CocktailSummary {
  description: string;
  ingredients: Ingredient[];
  instructions: string;
  difficulty: Difficulty;
}

export interface ICocktailService {
  getCocktailById(id: string): Promise<CocktailDetails>;
  getAllCocktails(): Promise<CocktailSummary[]>;
  getCocktailOfTheMonth(): Promise<CocktailSummary>;
}