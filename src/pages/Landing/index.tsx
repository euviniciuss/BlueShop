import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Landing: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suas informações</Text>
      <Text style={styles.info}>email: email</Text>
      <Text style={styles.info}>senha: email</Text>
    </View>
  );
};

export default Landing;
