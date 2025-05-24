import { CocktailDetails, ICocktailService } from "./types";

export class RealCocktailService implements ICocktailService {
  async getCocktailById(id: string): Promise<CocktailDetails> {
    throw new Error("Not implemented");
  }
};
