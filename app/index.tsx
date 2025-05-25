import { Text } from "@/components/Text/Text";
import { useFavorite } from "@/state/favorite/favorite-context";

export default function HomeScreen() {
  const favorite = useFavorite();
  return <Text>Welcome to the Home Screen!</Text>;
}