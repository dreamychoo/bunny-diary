import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  useFonts,
  Caveat_400Regular,
  Caveat_700Bold,
} from '@expo-google-fonts/caveat';
import { Ionicons } from '@expo/vector-icons';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme';
import { DailyWarmthScreen } from './src/screens/DailyWarmthScreen';
import { EmotionRescueScreen } from './src/screens/EmotionRescueScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Caveat_400Regular,
    Caveat_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.background }}>
        <ActivityIndicator size="large" color={theme.colors.accent} />
      </View>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <StatusBar style="dark" />
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarStyle: {
                backgroundColor: theme.colors.surface,
                borderTopColor: theme.colors.border,
                borderTopWidth: 1,
                paddingTop: 8,
                height: 60,
              },
              tabBarActiveTintColor: theme.colors.accent,
              tabBarInactiveTintColor: theme.colors.textMuted,
              tabBarLabelStyle: {
                fontFamily: theme.fontFamily.handwriting,
                fontSize: 18,
              },
              tabBarIcon: ({ focused, color, size }) => {
                const iconName =
                  route.name === 'DailyWarmth' ? 'sunny' : 'medkit';
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
          >
            <Tab.Screen
              name="DailyWarmth"
              component={DailyWarmthScreen}
              options={{ title: 'Daily Warmth' }}
            />
            <Tab.Screen
              name="EmotionRescue"
              component={EmotionRescueScreen}
              options={{ title: 'Emotion Rescue' }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
