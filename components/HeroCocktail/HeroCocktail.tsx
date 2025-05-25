import { useCocktailOfTheMonth } from '@/hooks/cocktails';
import { useTranslation } from '@/locale/helpers';
import { ImageBackground } from "expo-image";
import { useRouter } from 'expo-router';
import { FC } from "react";
import { Pressable, StyleSheet, View } from 'react-native';
import { Text } from "../Text/Text";

export const HeroCocktail: FC = () => {
  const { data: cocktail } = useCocktailOfTheMonth();
  const { t } = useTranslation('components.heroCocktail');
  const router = useRouter();

  return (
    <Pressable
      accessibilityLabel={`Featured cocktail: ${cocktail?.name}. Tap to view details.`}
      role="link"
      onPress={() => router.navigate({ pathname: '/cocktails', params: { id: cocktail?.id } })}
    >
      <ImageBackground
        style={styles.image}
        source={cocktail?.image.src}
        contentFit="cover"
        placeholderContentFit="cover"
        alt={cocktail?.image.alt}
      >
        <View style={styles.container}>
          <Text size="sm">{t('label')}</Text>
          <Text.Heading size="lg" numberOfLines={2}>
            {cocktail?.name}
          </Text.Heading>
        </View>
      </ImageBackground>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {},
  image: {
    width: '100%',
  }
});
