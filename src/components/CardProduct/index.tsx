import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import jordan1 from '../../assets/images/jordan1.png';

import styles from './styles';

const CardProduct: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image source={jordan1} style={{ width: '100%', height: '60%' }}></Image>
      </View>

      <View style={styles.containerRight}>
        <View>
          <Text style={styles.titleCard}>Air Jordan 1 Mid</Text>
          <Text style={styles.descriptionCard}>Lorem Ipsum is simply dummy text of the printing</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.titleCard}>R$149.99</Text>
          <TouchableOpacity
            style={styles.buttonPurchase}
            activeOpacity={0.9}
          >
            <Text style={styles.textButton}>Comprar</Text>
          </TouchableOpacity>
        </View>

      </View >
    </View>
  );
};

export default CardProduct;
