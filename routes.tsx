import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import Landing from './src/pages/Landing';

const { Navigator, Screen } = createStackNavigator();


export default function routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Home" component={Home} />
        <Screen name="Login" component={Login} />
        <Screen name="Register" component={Register} />
        <Screen name="Landing" component={Landing} />
      </Navigator>
    </NavigationContainer>
  )
}
