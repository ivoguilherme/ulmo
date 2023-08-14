import SplashScreen from "./src/features/splash-screen";
import { useFonts } from "expo-font";
import * as ExpoSplashScreen from "expo-splash-screen";
import { useCallback, useState } from "react";
import Routes from "./src/routes";

ExpoSplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await ExpoSplashScreen.hideAsync();

      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) return null;

  return isLoading ? <SplashScreen onLayout={onLayoutRootView} /> : <Routes />;
}
