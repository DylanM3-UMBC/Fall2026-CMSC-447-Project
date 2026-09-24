<<<<<<< HEAD
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  const router = useRouter()

  let isAuth = false;
  useEffect(() => {
    if(!isAuth){
      router.replace("/(auth)/login");
    }
  })

  return (
    <Stack screenOptions ={{  headerShown: false  }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="(auth)" />
    </Stack>
=======
import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import AppTabs from '@/components/app-tabs';

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      <AppTabs />
    </ThemeProvider>
>>>>>>> ff953e0 (Initial commit)
  );
}
