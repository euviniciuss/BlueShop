import React from 'react';

import { SafeAreaView, Text } from 'react-native';

import HeaderPages from '../../components/HeaderPages';

import styles from './styles';

const ShoppingCart: React.FC = () => {

  return (
    <SafeAreaView style={styles.container}>
      <HeaderPages title="Carrinho" />
      <Text style={{ color: '#000' }}> Hello Shopping Cart</Text>
    </SafeAreaView>
  );
};

export default ShoppingCart;
