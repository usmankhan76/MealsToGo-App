import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ResturantsScreen } from '../../features/resturants/screens/resturants-screen'
import { Text } from 'react-native'
import ReturantsDetailScreen from '../../features/resturants/screens/returants-detail-screen'
const ResturatnsNavigator = () => {
    const RestaurantStack=createStackNavigator()
  return (
    <RestaurantStack.Navigator screenOptions={{headerShown:false}} >
        <RestaurantStack.Screen name='Resturant' component={ResturantsScreen}/>
        <RestaurantStack.Screen name='ResturantDetail' component={ReturantsDetailScreen}/>
    </RestaurantStack.Navigator>
  )
}

export default ResturatnsNavigator