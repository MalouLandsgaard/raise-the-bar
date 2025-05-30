import CocktailService from '@/services/cocktails/cocktail-service';
import { useQuery } from '@tanstack/react-query';

export const useCocktailOfTheMonth = () => {
  return useQuery({
    queryKey: ['cocktailOfTheMonth'],
    queryFn: () => CocktailService.getCocktailOfTheMonth(),
  });
};

export const useCocktails = () => {
  return useQuery({
    queryKey: ['cocktails'],
    queryFn: () => CocktailService.getAllCocktails(),
  });
}

export const useCocktailDetails = (id: string) => {
  return useQuery({
    queryKey: ['cocktailDetails', id],
    queryFn: () => CocktailService.getCocktailById(id),
    enabled: !!id,
  });
}