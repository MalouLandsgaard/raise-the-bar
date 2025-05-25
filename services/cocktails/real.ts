import { CocktailDetails, CocktailSummary, ICocktailService } from "./types";

export class CocktailServiceReal implements ICocktailService {
  async getCocktailById(id: string): Promise<CocktailDetails> {
    throw new Error("Not implemented");
  }

  async getAllCocktails(): Promise<CocktailSummary[]> {
    throw new Error("Not implemented");
  }

  async getCocktailOfTheMonth(): Promise<CocktailSummary> {
    throw new Error("Not implemented");
  }
};
