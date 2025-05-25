import { colors } from '@/constants/colors';
import { useCocktailOfTheMonth } from '@/lib/hooks/cocktails';
import { useTranslation } from '@/locale/helpers';
import { ImageBackground } from "expo-image";
import { useRouter } from 'expo-router';
import { FC } from "react";
import { Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "../Text/Text";

export const HeroCocktail: FC = () => {
  const { data: cocktail } = useCocktailOfTheMonth();
  const { t } = useTranslation('components.heroCocktail');
  const router = useRouter();

  const month = new Date().toLocaleString('default', { month: 'long' });

  if (!cocktail?.id) return null;

  return (
    <Pressable
      accessibilityLabel={`Featured cocktail: ${cocktail?.name}. Tap to view details.`}
      role="link"
      onPress={() => router.navigate({ pathname: '/cocktails/[id]', params: { id: cocktail?.id } })}
    >
      <ImageBackground
        style={styles.image}
        source={cocktail?.image.src}
        contentFit="cover"
        placeholderContentFit="cover"
        alt={cocktail?.image.alt}
      >
        <SafeAreaView edges={['top']} style={styles.container}>
          <Text color={'text.accent'}>{t('label')}</Text>
          <Text.Heading size="lg" numberOfLines={2}>
            {`${month}: ${cocktail?.name}`}
          </Text.Heading>
        </SafeAreaView>
      </ImageBackground>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
  },
  container: {
    backgroundColor: colors['background.primary'],
    padding: 24,
    gap: 8,
  },
});
