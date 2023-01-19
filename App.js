import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ResturantsScreen } from "./src/features/resturants/screens/resturants-screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import {
  useFonts as LatoFonts,
  Lato_400Regular,
} from '@expo-google-fonts/lato';
// const isAndorid = Platform.OS === "android";
// const isIOS = Platform.OS === "ios";

export default function App() {
  const [oswaldLoaded] = useFonts({
    Oswald_400Regular,
  });
  const [latoLoaded]=LatoFonts({
    Lato_400Regular
  })
  if(!oswaldLoaded||!latoLoaded){
    return null
  }
  return (
    <>
    <ThemeProvider theme={theme}>
      <ResturantsScreen />
      <ExpoStatusBar style="auto" />

    </ThemeProvider>
    </>
  );
}
