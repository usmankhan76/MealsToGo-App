import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { ResturantsScreen } from '../../features/resturants/screens/resturants-screen';
import { View,Text } from "react-native";
import {SafeArea} from '../../components/utility/safe-area-component'
import ResturatnsNavigator from './resturatns-navigator';
import MapScreen from '../../features/map/map-screens/map-screen';


const AppNavigator = () => {
    const Tab=createBottomTabNavigator()
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
        tabBarActiveTintColor: 'darkblue',
        tabBarInactiveTintColor: 'gray',
        headerShown:false    
        }}

    function SettingScreen() {
        return (
            <SafeArea>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
            </View>
            </SafeArea>
        );
}
//     function MapScreen() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Map Screen!</Text>
//       </View>
//     );
// }
  return (
    <NavigationContainer >
        <Tab.Navigator
          screenOptions={provideIcons}
          >
            <Tab.Screen name="Resturants" component={ResturatnsNavigator}/>
            <Tab.Screen name="Map" component={MapScreen}/>
            <Tab.Screen name="Setting" component={SettingScreen}/>

        </Tab.Navigator>

      </NavigationContainer>
  )
}

export default AppNavigator