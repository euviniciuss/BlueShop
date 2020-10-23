import React from 'react';

import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const Landing: React.FC = () => {
  const { navigate } = useNavigation();

  const handleNavigateToLogin = () => {
    navigate('Login');
  };

  const handleNavigateToRegister = () => {
    navigate('Register');
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>BlueShop</Text>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={handleNavigateToLogin}
        >
          <Text style={styles.textButtonLogin}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={handleNavigateToRegister}
        >
          <Text style={styles.textButtonRegister}>Sing up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Landing;
