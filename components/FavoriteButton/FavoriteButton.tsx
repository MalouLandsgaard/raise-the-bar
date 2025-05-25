import HeartIconFilled from '@/assets/icons/heart-filled.svg';
import HeartIcon from '@/assets/icons/heart.svg';
import { colors } from '@/constants/colors';
import { useFavorite } from '@/state/favorite/favorite-context';
import { Pressable } from 'react-native';

interface FavoriteButtonProps {
  id: string;
}

export const FavoriteButton = ({ id }: FavoriteButtonProps) => {
  const { toggleFavoriteCocktail, isFavoriteCocktail } = useFavorite();
  const isFavorite = isFavoriteCocktail(id);

  return (
    <Pressable
      onPress={() => toggleFavoriteCocktail(id)}
    >
      {isFavorite ?
        <HeartIconFilled width={20} height={20} color={colors['brand.500']} />
        :
        <HeartIcon width={20} height={20} color={colors['brand.500']} />}
    </Pressable>
  );
};