import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

const Header: React.FC = () => {
  const { navigate } = useNavigation();

  const handleGoBack = () => {
    navigate('Landing');
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Ionicons
          name="md-arrow-round-back"
          size={24} color="white"
          onPress={handleGoBack}
        />
        <Text style={styles.title}>BlueShop</Text>
      </View>
    </SafeAreaView>
  );
}

export default Header;
