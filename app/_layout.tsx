import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import "./global.css";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Sofachrome": require("../assets/fonts/Sofachrome-Italic.otf"),
    "Montserrat-ExtraBold": require("../assets/fonts/Montserrat-ExtraBold.ttf"),
    "Montserrat-BoldItalic": require("../assets/fonts/Montserrat-BoldItalic.ttf"),
    "Montserrat-SemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
  });

  useEffect(() => {
    console.log("Fonts Loaded:", fontsLoaded);
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  
  if (!fontsLoaded) return null;

  return <Stack />
}
