import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ResturantsScreen } from '../../features/resturants/screens/resturants-screen'
import { Text } from 'react-native'
import ReturantsDetailScreen from '../../features/resturants/screens/returants-detail-screen'
const ResturatnsNavigator = () => {
    const RestaurantStack=createStackNavigator()
    // useEffect(()=>{
    //   const options = {method: 'GET'};

    //   fetch('http://localhost:5001/mealstogo-c743c/us-central1/gecoding?city=Antwerp', options)
    //   .then(response => response.json())
    //   .then(response => console.log("response in restu",response))
    //   .catch(err => console.error("eerreeeeeeeeee",err.message));
    // },[])
  return (
    <RestaurantStack.Navigator screenOptions={{headerShown:false}} >
        <RestaurantStack.Screen name='Resturant' component={ResturantsScreen}/>
        <RestaurantStack.Screen name='ResturantDetail' component={ReturantsDetailScreen}/>
    </RestaurantStack.Navigator>
  )
}

export default ResturatnsNavigator