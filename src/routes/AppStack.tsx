import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Landing from '../pages/Landing';
import BottomTabNavigator from './BottomTabNavigator';

const { Navigator, Screen } = createStackNavigator();


export default function routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Landing" component={Landing} />
        <Screen name="Login" component={Login} />
        <Screen name="Register" component={Register} />
        <Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      </Navigator>
    </NavigationContainer>
  )
}
