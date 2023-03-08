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

import { ResturantProvider } from "./src/services/resturants/resturants-context";
import { LocationProvider } from "./src/services/location/location-context";
import Navigation from "./src/infrastructure/navigation";
import { FavouritesContextProvider } from './src/services/favourites/favourites-context';
import AuthenticationContextProvider from './src/services/authentication/authentication-context';
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
      <AuthenticationContextProvider>
              <Navigation/>    
              <ExpoStatusBar style='auto'   />
      </AuthenticationContextProvider>

    </ThemeProvider>
    </>
  );
}
