import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native';
import AccountScreen from '../../features/account/account-screens/account-screen';
import LoginScreen from '../../features/account/account-screens/login-screen';
import RegisterScreen from '../../features/account/account-screens/register-screen';

const AccountNavigator = () => {
    const TabNavigator=createBottomTabNavigator()
    const AccountStack=createStackNavigator();
    const MainComp=()=>{
            <View>
                <Text>Account Screen</Text>
                <Text>Account Screen</Text>
                <Text>Account Screen</Text>
            </View>
        }
   
  return (
    <AccountStack.Navigator screenOptions={{headerShown:false}} >
            <AccountStack.Screen name='Main' component={AccountScreen}/>
            <AccountStack.Screen name='Login' component={LoginScreen}/>
            <AccountStack.Screen name='Register' component={RegisterScreen}/>
        </AccountStack.Navigator>
  )
}

export default AccountNavigator