import { CocktailSummary } from "@/services/cocktails/types";
import { Image } from "expo-image";
import { useRouter } from 'expo-router';
import { FC } from "react";
import { Pressable, StyleSheet, View } from 'react-native';

interface HeroProps {
  cocktail: CocktailSummary;
}

export const HeroPicture: FC<HeroProps> = props => {
  const { id, name, image } = props.cocktail;
  const router = useRouter();

  return (
    <Pressable
      accessibilityLabel={`Featured cocktail: ${name}. Tap to view details.`}
      role="link"
      onPress={() => router.navigate({ pathname: '/cocktails', params: { id: id } })}
    >
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={image.src}
          contentFit="cover"
          placeholderContentFit="cover"
          alt={image.alt}
        />
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {},
  image: {
    aspectRatio: 4 / 3,
  }
});
