import React from 'react'
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { SettingScreen } from '../../features/settings/settings-screens/settings-screen';
import FavoritesScreen from '../../features/settings/settings-screens/favorites-screen';


const SettingNavigator = () => {
    const SettingStack=createStackNavigator()
  return (
    <SettingStack.Navigator 
        screenOptions={{
            headerShown:false,
            // headerMode:"screen",
            // cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS
        }
        }

            >
        <SettingStack.Screen name='Settings' component={SettingScreen} />
        <SettingStack.Screen options={{headerShown:true ,headerMode:'screen',}} name='Favourites' component={FavoritesScreen} />
    </SettingStack.Navigator>
  )
}

export default SettingNavigator