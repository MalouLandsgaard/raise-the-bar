import { Text } from "@/components/Text/Text";
import { colors } from "@/constants/colors";
import { useFavorite } from "@/state/favorite/favorite-context";
import { useNavigation } from "@react-navigation/native";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";

export default function CocktailDetailScreen() {
  const { id: cocktailId } = useLocalSearchParams<{ id: string }>();
  const navigation = useNavigation();
  const { isFavoriteCocktail } = useFavorite();
  const isFavorite = isFavoriteCocktail(cocktailId);

  // TODO: query for cocktail details using the id

  useEffect(() => {
    const cocktailName = `Cocktail Name (${cocktailId})`;
    navigation.setOptions({ title: cocktailName });
  }, [cocktailId, navigation]);

  return (
    <View style={styles.container}>
      <Text> Cocktail Detail Screen for ID: {cocktailId}</Text>
      {isFavorite ? (
        <Text style={{ color: colors['text.accent'] }}>This cocktail is a favorite!</Text>
      ) : (
        <Text style={{ color: colors['text.secondary'] }}>This cocktail is not a favorite...</Text>
      )}
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