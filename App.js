import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ResturantsScreen } from "./src/features/resturants/screens/resturants-screen";
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
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View,Text } from "react-native";
import { SafeArea } from "./src/components/utility/safe-area-component";
import { Spacer } from "./src/components/spacer/spacer-comp";
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
  const routesAndIcons={
    Resturants:"md-restaurant",
    Setting:"md-settings",
    Map:"md-map",
  }
  const provideIcons=({route})=>{
    const iconName = routesAndIcons[route.name]; //it will provide us the icons name 
    return{
      tabBarIcon:({size,color})=>{
        return <Ionicons name={iconName} size={size} color={color} />
      },
      tabBarActiveTintColor: 'blue',
      tabBarInactiveTintColor: 'gray',     
    }}
    
  function MapScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Map Screen!</Text>
      </View>
    );
}

function SettingScreen() {
  return (
    <SafeArea>

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
    </SafeArea>
  );
}
  const Tab=createBottomTabNavigator()

  
  return (
    <>
    <ThemeProvider theme={theme}>
      {/* <ResturantsScreen /> */}


      
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={provideIcons}
          >
            <Tab.Screen name="Resturants" component={ResturantsScreen}/>
            <Tab.Screen name="Map" component={MapScreen}/>
            <Tab.Screen name="Setting" component={SettingScreen}/>

        </Tab.Navigator>

      </NavigationContainer>
      <ExpoStatusBar style="auto" />

    </ThemeProvider>
    </>
  );
}
