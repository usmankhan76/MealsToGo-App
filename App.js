import 'react-native-gesture-handler';
import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import {
  useFonts,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import {
  useFonts as LatoFonts,
  Lato_400Regular,
} from '@expo-google-fonts/lato';

import { Spacer } from "./src/components/spacer/spacer-comp";
import { ResturantProvider } from "./src/services/resturants/resturants-context";
import { LocationProvider } from "./src/services/location/location-context";
import AppNavigator from "./src/infrastructure/navigation/app-navigator";
import Navigation from "./src/infrastructure/navigation";
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
      {/* <ResturantsScreen /> */}

      <LocationProvider>
      
      <ResturantProvider>
      <Navigation/>
      
      <ExpoStatusBar style='auto'   />
      </ResturantProvider>
      </LocationProvider>
    </ThemeProvider>
    </>
  );
}
