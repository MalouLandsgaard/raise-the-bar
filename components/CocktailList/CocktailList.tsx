import { CocktailSummary } from '@/services/cocktails/types';
import { Image } from "expo-image";
import { useRouter } from 'expo-router';
import { FC } from "react";
import { Pressable, StyleSheet, View } from 'react-native';
import { Text } from "../Text/Text";

interface CocktailListProps {
  items: CocktailSummary[];
}

export const CocktailList: FC<CocktailListProps> = props => {
  const { items } = props;

  return (
    <View style={styles.container}>
      {items.map((cocktail, index) => (
        <CocktailListItem key={cocktail.id} index={index} cocktail={cocktail} />
      ))}
    </View>
  )
}

const CocktailListItem: FC<{ index: number, cocktail: CocktailSummary }> = ({ index, cocktail }) => {
  const router = useRouter();

  return (
    <Pressable
      style={[styles.card, index % 2 === 0 ? styles.leftCard : styles.rightCard]}
      accessibilityLabel={`Cocktail: ${cocktail.name}. Tap to view details.`}
      role="link"
      onPress={() => router.navigate({ pathname: '/cocktails', params: { id: cocktail.id } })}
    >
      <Image
        style={styles.image}
        source={cocktail.image.src}
        contentFit="cover"
        placeholderContentFit="cover"
        alt={cocktail.image.alt}
      />
      <View style={styles.container}>
        <Text size="sm">Featured Cocktail</Text>
        <Text.Heading size="lg" numberOfLines={2}>
          {cocktail.name}
        </Text.Heading>
      </View>

    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  image: {
    width: '100%',
  },
  card: {
    width: '50%',
  },
  leftCard: {
    paddingRight: 8,
  },
  rightCard: {
    paddingLeft: 8,
  }
});
