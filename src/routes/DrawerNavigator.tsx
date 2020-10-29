import React from 'react';

import { Button, View } from 'react-native';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const { navigate } = useNavigation();

const LandingPage:React.FC = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigate('Landing')}
        title="Pagina Principal"
      />
    </View>
  );
}

const RegisterPage:React.FC = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button 
        onPress={() => navigate('Register')} 
        title="Pagina de Registro" 
      />
    </View>
  );
}

const { Navigator, Screen } = createDrawerNavigator();

const DrawerNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Landing">
        <Screen name="LandingPage" component={LandingPage} />
        <Screen name="RegisterPage" component={RegisterPage} />
      </Navigator>
    </NavigationContainer>
  );
}

export default DrawerNavigator;