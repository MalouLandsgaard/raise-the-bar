import { colors } from '@/constants/colors';
import { QueryProvider } from '@/lib/react-query';
import "@/locale";
import { FavoriteProvider } from '@/state/favorite/favorite-context';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import 'react-native-reanimated';

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <QueryProvider>
      <FavoriteProvider>
        <Stack screenOptions={{
          contentStyle: styles.content,
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.headerTitleStyle
        }} >
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
            }}
          />
        </Stack>

      </FavoriteProvider>
    </QueryProvider>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: colors['background.primary'],
  },
  headerStyle: {
    backgroundColor: colors['background.primary'],
  },
  headerTitleStyle: {
    color: colors['text.primary'],
  },
});