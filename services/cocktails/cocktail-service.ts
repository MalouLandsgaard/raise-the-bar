import { MockCocktailService } from "./mock";
import { RealCocktailService } from "./real";


export const getCocktailService = () => {
  return process.env.USE_MOCK === 'true'
    ? MockCocktailService
    : RealCocktailService;
};