import React, { useContext } from 'react'

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { ResturantsScreen } from '../../features/resturants/screens/resturants-screen';
import {SafeArea} from '../../components/utility/safe-area-component'
import ResturatnsNavigator from './resturatns-navigator';
import MapScreen from '../../features/map/map-screens/map-screen';
import { AuthenticationContext } from '../../services/authentication/authentication-context';
import { auth } from '../../firebase';
import { FavouritesContextProvider } from '../../services/favourites/favourites-context';
import { LocationProvider } from '../../services/location/location-context';
import { ResturantProvider } from '../../services/resturants/resturants-context';
import SettingNavigator from './setting-navigator';


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

   
//     function MapScreen() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Map Screen!</Text>
//       </View>
//     );
// }

    
    
  return (
    <FavouritesContextProvider>
          <LocationProvider>
            <ResturantProvider>
                 <Tab.Navigator
                    screenOptions={provideIcons}
                    >
                    <Tab.Screen name="Resturants" component={ResturatnsNavigator}/>
                    <Tab.Screen name="Map" component={MapScreen}/>
                    <Tab.Screen name="Setting" component={SettingNavigator}/>

                </Tab.Navigator>
            </ResturantProvider>
          </LocationProvider>
        </FavouritesContextProvider>
       

      
  )
}

export default AppNavigator