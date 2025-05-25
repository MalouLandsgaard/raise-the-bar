import { useTranslation } from '@/locale/helpers';
import { CocktailSummary } from '@/services/cocktails/types';
import { Image } from "expo-image";
import { useRouter } from 'expo-router';
import { FC } from "react";
import { Pressable, StyleSheet, View } from 'react-native';
import { FavoriteButton } from '../FavoriteButton/FavoriteButton';
import { Text } from "../Text/Text";

interface CocktailListProps {
  items: CocktailSummary[];
}

export const CocktailList: FC<CocktailListProps> = props => {
  const { items } = props;
  const { t } = useTranslation('components.cocktailList');

  return (
    <View style={styles.container} >
      <Text.Heading size="md" >
        {t('title')}
      </Text.Heading>
      <View style={styles.cocktailList}>
        {items.map((cocktail, index) => (
          <CocktailListItem key={cocktail.id} index={index} cocktail={cocktail} />
        ))}
      </View>
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
      onPress={() => router.navigate({ pathname: '/cocktails/[id]', params: { id: cocktail?.id } })}
    >
      <Image
        style={styles.image}
        source={cocktail.image.src}
        contentFit="cover"
        placeholderContentFit="cover"
        alt={cocktail.image.alt}
      />
      <View style={styles.cocktailInfo}>
        <Text.Heading size="sm" numberOfLines={2}>
          {cocktail.name}
        </Text.Heading>
        <FavoriteButton id={cocktail.id} />
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    gap: 24,
  },
  cocktailList: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  image: {
    width: '100%',
    height: 200,
  },
  card: {
    width: '50%',
    flexDirection: 'column',
  },
  leftCard: {
    paddingRight: 8,
  },
  rightCard: {
    paddingLeft: 8,
  },
  cocktailInfo: {
    paddingTop: 8,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
