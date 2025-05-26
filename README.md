# Raise The Bar

A React Native app for discovering and favoriting cocktails and bars.

  
> **Note:** This app was built as a quick project over a couple of hours.
> It is not production-ready

## Features

- Browse a list of cocktails
- View cocktail of the month
- Mark cocktails as favorites
- Localized (Danish)
- Built with Expo, React Native, and TypeScript

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

### Installation

```bash
git clone https://github.com/MalouLandsgaard/raise-the-bar
cd raise-the-bar
npm install
```

### Running the App
Start the Expo development server for iOS (only tested on iOS):

```bash
npm run ios
```

This will launch the app in the iOS simulator.

### Environment Variables

Copy `.env.example` to `.env` and set the variables as needed.

## Project Structure

- `app/` - App entry points and screens
- `components/` - Reusable UI components
- `constants/` - Theme and style constants
- `services/` - Data fetching and mock data
- `state/` - Context and state management
- `locale/` - Localization files

## TODO

- Add a map view showing favorite bars (e.g., Gaia in Copenhagen)
- Implement a brand for the app
