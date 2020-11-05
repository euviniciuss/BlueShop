import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { Feather } from '@expo/vector-icons';

import jordan1 from '../../assets/images/jordan1.png';

import styles from './styles';

const CardProduct: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image source={jordan1} style={{ width: '100%', height: '100%' }}></Image>
      </View>

      <View style={styles.containerDown}>
        <View>
          <Text style={styles.titleCard}>Air Jordan 1 Mid</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.titleCard}>R$149.99</Text>
          <TouchableOpacity
            style={styles.buttonPurchase}
            activeOpacity={0.9}
          >
            <Feather name="shopping-cart" color='white' size={20} />
          </TouchableOpacity>
        </View>

      </View >
    </View>
  );
};

export default CardProduct;
