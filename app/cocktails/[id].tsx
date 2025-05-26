import { Text } from "@/components/Text/Text";
import { colors } from "@/constants/colors";
import { useCocktailDetails } from "@/lib/hooks/cocktails";
import { useTranslation } from "@/locale/helpers";
import { useFavorite } from "@/state/favorite/favorite-context";
import { useNavigation } from "@react-navigation/native";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";

export default function CocktailDetailScreen() {
  const { id: cocktailId } = useLocalSearchParams<{ id: string }>();
  const navigation = useNavigation();
  const { t } = useTranslation('screens.cocktailDetail');

  const { data: cocktail } = useCocktailDetails(cocktailId);

  const { isFavoriteCocktail } = useFavorite();
  const isFavorite = isFavoriteCocktail(cocktailId);

  useEffect(() => {
    const cocktailName = cocktail?.name;
    navigation.setOptions({ title: cocktailName });
  }, [cocktail, navigation]);

  return (
    <View style={styles.container}>
      <Text> Cocktail Detail Screen for ID: {cocktailId}</Text>
      {isFavorite ? (
        <Text style={{ color: colors['text.accent'] }}>This cocktail is a favorite!</Text>
      ) : (
        <Text style={{ color: colors['text.secondary'] }}>This cocktail is not a favorite...</Text>
      )}
      <Text.Heading size="lg">{cocktail?.name}</Text.Heading>
      <Text size="sm">{`Difficulty: ${cocktail?.difficulty}`}</Text>
      <Text>{cocktail?.description}</Text>
      <Text.Heading>{t('ingredients')}</Text.Heading>
      <Text>
        {cocktail?.ingredients.map((ingredient) => `${ingredient.name} (${ingredient.quantity})`).join(', ')}
      </Text>
      <Text.Heading>{t('instructions')}</Text.Heading>
      <Text>{cocktail?.instructions}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    gap: 16,
  }
});