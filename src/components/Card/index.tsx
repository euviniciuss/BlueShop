import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';


const Banner: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerCard}>
        <Text>Imagem</Text>
      </View>

      <Text>Title</Text>
      <View style={styles.productText}>
        <Text>Teste</Text>
        <Text>Teste dois</Text>
      </View>
    </View>
  );
};

export default Banner;
