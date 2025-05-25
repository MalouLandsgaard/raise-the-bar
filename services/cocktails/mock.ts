import { MOCK_COCKTAIL_OF_THE_MONTH_ID, MOCK_COCKTAILS } from "./mock-data";
import { CocktailDetails, CocktailSummary, ICocktailService } from "./types";

export class CocktailServiceMock implements ICocktailService {
  async getCocktailById(id: string): Promise<CocktailDetails> {
    const cocktail = MOCK_COCKTAILS.find(c => c.id === id);
    if (!cocktail) {
      throw new Error(`Cocktail with id ${id} not found`);
    }
    return cocktail;
  }

  async getAllCocktails(): Promise<CocktailSummary[]> {
    return MOCK_COCKTAILS.map(({ id, name, image }) => ({ id, name, image } as CocktailSummary));
  }

  async getCocktailOfTheMonth(): Promise<CocktailSummary> {
    if (!MOCK_COCKTAIL_OF_THE_MONTH_ID) {
      throw new Error("Cocktail of the month ID is not defined.");
    }

    const cocktail = MOCK_COCKTAILS.find(c => c.id === MOCK_COCKTAIL_OF_THE_MONTH_ID);

    if (!cocktail) {
      throw new Error(`No cocktail found with ID: ${MOCK_COCKTAIL_OF_THE_MONTH_ID}`);
    }

    const { id, name, image } = cocktail;
    return { id, name, image } as CocktailSummary;
  } 
}