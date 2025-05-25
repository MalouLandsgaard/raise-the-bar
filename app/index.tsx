import { CocktailList } from "@/components/CocktailList/CocktailList";
import { HeroCocktail } from "@/components/HeroCocktail/HeroCocktail";
import { useCocktails } from "@/lib/hooks/cocktails";
import { ScrollView, StyleSheet, View } from "react-native";

export default function HomeScreen() {

  const { data: cocktails } = useCocktails();

  return (
    <ScrollView>
      <View style={styles.container}>
        <HeroCocktail />
        <CocktailList items={cocktails ?? []} />
      </View></ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 40,
  },
});