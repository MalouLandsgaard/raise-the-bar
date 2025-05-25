import { storage } from '@/lib/storage/mmkv';

const COCKTAILS_KEY = 'favorite.cocktails';
const BARS_KEY = 'favorite.bars';

export const loadFavorites = () => {
  const cocktails = JSON.parse(storage.getString(COCKTAILS_KEY) || '[]');
  const bars = JSON.parse(storage.getString(BARS_KEY) || '[]');

  return { cocktails, bars };
};

export const saveFavoriteCocktails = (cocktails: string[]) => 
  storage.set(COCKTAILS_KEY, JSON.stringify(cocktails));

export const saveFavoriteBars = (bars: string[]) =>
  storage.set(BARS_KEY, JSON.stringify(bars));

