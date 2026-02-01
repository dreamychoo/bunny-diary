# Bunny Diary

A minimalist, gentle journaling app built with React Native (Expo) and styled-components.

## Design System

- **Background**: Creamy paper texture (`#FDFBF7`)
- **Font**: Caveat (handwriting-style Google Font)
- **Navigation**: Bottom tab bar
  - **Daily Warmth** (Sun icon) — gentle daily reflections
  - **Emotion Rescue** (First Aid icon) — calming support
- **Style**: Minimalist, healing. Cards use `borderRadius: 20`.

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Add app assets (required by Expo): place `icon.png`, `splash.png`, and `adaptive-icon.png` in the `assets/` folder. You can use [Expo's asset generator](https://www.npmjs.com/package/@expo/configure-splash-screen) or any 1024×1024 image for the icon.

3. Start the app:

   ```bash
   npx expo start
   ```

4. Run on a device or simulator (press `i` for iOS, `a` for Android in the terminal).

## Tech Stack

- **Expo** ~50
- **React Navigation** (bottom tabs)
- **styled-components** (with `styled-components/native`)
- **@expo-google-fonts/caveat** for handwriting font

## Project Structure

```
bunny-diary/
├── App.tsx                 # Entry: font loading, theme, bottom tabs
├── app.json
├── src/
│   ├── theme.ts            # Design tokens (colors, radius, font)
│   └── screens/
│       ├── DailyWarmthScreen.tsx
│       └── EmotionRescueScreen.tsx
└── assets/
```
