import { MOCK_COCKTAILS } from "./mock-data";
import { CocktailDetails, ICocktailService } from "./types";

export class MockCocktailService implements ICocktailService {
  async getCocktailById(id: string): Promise<CocktailDetails> {
    const cocktail = MOCK_COCKTAILS.find(c => c.id === id);
    if (!cocktail) {
      throw new Error(`Cocktail with id ${id} not found`);
    }
    return cocktail;
  }
}