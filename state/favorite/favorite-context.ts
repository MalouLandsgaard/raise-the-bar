import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { loadFavorites, saveFavoriteBars, saveFavoriteCocktails } from "./favorite-storage";

export type FavoriteContextValue = {
  toggleFavoriteCocktail: (cocktailId: string) => void;
  toggleFavoriteBar: (barId: string) => void;
  getFavoriteCocktails: () => string[];
  getFavoriteBars: () => string[];
}

class FavoriteError extends Error {}

const FavoriteContext = createContext<FavoriteContextValue | undefined>(undefined);

export const FavoriteProvider = ({ children }: { children: ReactNode }) => {
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
    setCocktails((favorites) => {
      const isFavorite = favorites.includes(cocktailId);
      const updatedFavorites = isFavorite
        ? favorites.filter((id) => id !== cocktailId)
        : [...favorites, cocktailId];
      updateFavoriteCocktails(updatedFavorites);
      return updatedFavorites;
    });
  }

  const toggleFavoriteBar = (barId: string) => {
    setBars((favorites) => {
      const isFavorite = favorites.includes(barId);
      const updatedFavorites = isFavorite
        ? favorites.filter((id) => id !== barId)
        : [...favorites, barId];
      updateFavoriteBars(updatedFavorites);
      return updatedFavorites;
    });
  }

  const isFavoriteCocktail = (cocktailId: string) => cocktails.includes(cocktailId);
  const isFavoriteBar = (barId: string) => bars.includes(barId);

  const getFavoriteCocktails = () => cocktails;
  const getFavoriteBars = () => bars;
  
  return (
    <FavoriteContext.Provider value={{
      toggleFavoriteCocktail,
      toggleFavoriteBar,
      getFavoriteCocktails,
      getFavoriteBars,
    }}>
  {children}
    </FavoriteContext.Provider>
  );

}

export const useFavorite = () => {
  const context = useContext(FavoriteContext);

  if (!context) {
    throw new Error("useFavorite cannot be used outside of FavoriteProvider");
  }

  return context;
};
