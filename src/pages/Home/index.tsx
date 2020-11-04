import React from 'react';
import { SafeAreaView, View, Text, ScrollView } from 'react-native';

import Card from '../../components/Card';
import HeaderShopping from '../../components/HeaderShopping';
import Banner from '../../components/Banner';

import { GlobalColors, globalStyles } from '../../styles/Global';
import styles from './styles';

const Home: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.productsContainer}
        showsHorizontalScrollIndicator={false}
      >
        <HeaderShopping />

        <View style={styles.containerMain}>
          <Text style={globalStyles.titlePage}>O melhor para você está na <Text style={{ color: GlobalColors.colorBackground }}>Blue</Text></Text>
          <Banner />

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

          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
