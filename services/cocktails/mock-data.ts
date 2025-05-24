import { CocktailDetails } from './types';

export const MOCK_COCKTAILS: CocktailDetails[] = [
  {
    id: '1',
    name: 'Elevator Pitch',
    description: 'A refreshing blend of citrus and herbal notes, perfect for a quick pick-me-up.',
    difficulty: 'Starter Sip',
    ingredients: [
      {name: 'Gin', quantity: '50ml'},
      {name: 'Orange Liqueur', quantity: '20ml'},
      {name: 'Lemon Juice', quantity: '15ml'},
      {name: 'Tonic Water', quantity: '100ml'},
      {name: 'Orange Slice', quantity: '1 slice'},
    ],
    instructions: `
      1. Fill a shaker with ice.
      2. Add gin, orange liqueur, and lemon juice.
      3. Shake well and strain into a wine glass filled with ice.
      4. Top with tonic water and garnish with an orange slice.
      5. Serve immediately and enjoy your Elevator Pitch!`,
    image: {
      src: require('@/assets/images/cocktails/elevator-pitch.jpg'),
      alt: 'The cocktail named Elevator Pitch, served in wine glasses with a garnish of orange'
    }
  },
  {
    id: '2',
    name: 'Top Shelf Twist',
    description: 'A new take on a classic negroni, with the subtle sweetness of pear.',
    difficulty: 'Master Mix',
    ingredients: [
      { name: 'Gin', quantity: '30ml' },
      { name: 'Sweet Vermouth', quantity: '30ml' },
      { name: 'Campari', quantity: '30ml' },
      { name: 'Pear Liqueur', quantity: '15ml' },
      { name: 'Fresh Pear Slice', quantity: '1 slice' }
    ],
    instructions: `
      1. Fill a mixing glass with ice.
      2. Add gin, sweet vermouth, Campari, and pear liqueur.
      3. Stir until well chilled.
      4. Strain into a rocks glass over a large ice cube.
      5. Garnish with a fresh pear slice.
      6. Enjoy your Top Shelf Twist with a pear-inspired upgrade!`,
    image: {
      src: require('@/assets/images/cocktails/top-shelf-twist.jpg'),
      alt: 'A negroni-style cocktail with a pear slice garnish'
    }
  },
];