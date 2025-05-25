import AsyncStorage from '@react-native-async-storage/async-storage';

const COCKTAILS_KEY = 'favorite.cocktails';
const BARS_KEY = 'favorite.bars';

export const loadFavorites = async (): Promise<{ cocktails: string[]; bars: string[] }> => {
  const cocktailsString =  await AsyncStorage.getItem(COCKTAILS_KEY);
  const barsString = await AsyncStorage.getItem(BARS_KEY);

  const cocktails = cocktailsString ? JSON.parse(cocktailsString) : [];
  const bars = barsString ? JSON.parse(barsString) : [];

  return { cocktails, bars };
};

export const saveFavoriteCocktails = async (cocktails: string[]) =>
  await AsyncStorage.setItem(COCKTAILS_KEY, JSON.stringify(cocktails));

export const saveFavoriteBars = async (bars: string[]) =>
  await AsyncStorage.setItem(BARS_KEY, JSON.stringify(bars));

