import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';

import styles from './styles';

const Header: React.FC = () => {
  const { navigate } = useNavigation();

  const handleGoBack = () => {
    navigate('Home');
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Ionicons 
          name="md-arrow-round-back" 
          size={24} color="white"
          onPress={handleGoBack}
        />

        <SimpleLineIcons name="social-soundcloud" size={30} color="white" />
      </View>
    </SafeAreaView>
  );
}

export default Header;
