import { CocktailServiceMock } from "./mock";
import { CocktailServiceReal } from "./real";
import type { ICocktailService } from "./types";

const CocktailService: ICocktailService = process.env.USE_MOCK === 'true'
  ? new CocktailServiceMock()
  : new CocktailServiceReal();

export default CocktailService;