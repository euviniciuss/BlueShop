import React from 'react';
import { SafeAreaView, View, Text, ScrollView } from 'react-native';

import Card from '../../components/Card';
import HeaderShopping from '../../components/HeaderShopping';

import styles from './styles';

const Home: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderShopping />
      <ScrollView style={styles.productsContainer}>
        <View style={styles.containerMain}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.containerCard} >
              <Card />
              <Card />
              <Card />
            </View>
          </ScrollView>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
