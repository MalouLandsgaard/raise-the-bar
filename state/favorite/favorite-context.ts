import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { loadFavorites, saveFavoriteBars, saveFavoriteCocktails } from "./favorite-storage";
import { View } from "react-native";

export type FavoriteContextValue = {
  toggleFavoriteCocktail: (cocktailId: string) => void;
  toggleFavoriteBar: (barId: string) => void;
  getFavoriteCocktails: () => string[];
  getFavoriteBars: () => string[];
}

class FavoriteError extends Error {}

const favoriteContext = createContext<FavoriteContextValue | undefined>(undefined);

const FavoriteContextProvider = favoriteContext.Provider;

export const FavoriteProvider = ({ children }: { children: ReactNode }) => {

  const [favoriteState, setFavoriteState] = useState<FavoriteContextValue>();

  const [cocktails, setCocktails] = useState<string[]>([]);
  const [bars, setBars] = useState<string[]>([]);

  useEffect(() => {
    try {
      const { cocktails: savedCocktails, bars: savedBars } = loadFavorites();
      setCocktails(savedCocktails);
      setBars(savedBars);
    } catch (error) {
      console.log(error);
      throw new FavoriteError("Failed to load favorites");
    }
  }, []);

  const updateFavoriteCocktails = (updated: string[]) => {
    setCocktails(updated);
    saveFavoriteCocktails(updated);
  }

  const updateFavoriteBars = (updated: string[]) => {
    setBars(updated);
    saveFavoriteBars(updated);
  }

  const toggleFavoriteCocktail = (cocktailId: string) => {
    setCocktails((prev) => {
      const isFavorite = prev.includes(cocktailId);
      const updatedFavorites = isFavorite
        ? prev.filter((id) => id !== cocktailId)
        : [...prev, cocktailId];
      updateFavoriteCocktails(updatedFavorites);
      return updatedFavorites;
    });
  }

  const toggleFavoriteBar = (barId: string) => {
    setBars((prev) => {
      const isFavorite = prev.includes(barId);
      const updatedFavorites = isFavorite
        ? prev.filter((id) => id !== barId)
        : [...prev, barId];
      updateFavoriteBars(updatedFavorites);
      return updatedFavorites;
    });
  }

  const isFavoriteCocktail = (cocktailId: string) => cocktails.includes(cocktailId);
  const isFavoriteBar = (barId: string) => bars.includes(barId);

  const getFavoriteCocktails = () => cocktails;
  const getFavoriteBars = () => bars;
  
  if (favoriteState) {
    return (
      <FavoriteContextProvider value={favoriteState}>
        {children}
      </FavoriteContextProvider>
    );
  }

}

export const useFavorite = () => {
  const context = useContext(favoriteContext);

  if (!context) {
    throw new Error("useFavorite cannot be used outside of FavoriteProvider");
  }

  return context;
};
