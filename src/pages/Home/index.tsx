import React from 'react';
import { SafeAreaView, View, Text, ScrollView } from 'react-native';

import Card from '../../components/Card';
import Banner from '../../components/Banner';
import CardProduct from '../../components/CardProduct';
import TitlePromotions from '../../components/TitlePromotions';
import HeaderShopping from '../../components/HeaderShopping';

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

          <TitlePromotions title="Principais ofertas da semana" />

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginHorizontal: 1 }}
          >
            <View style={styles.containerCard} >
              <Card />
              <Card />
              <Card />
            </View>
          </ScrollView>

          <TitlePromotions title="Os melhores tênis" />

          <View style={styles.containerCardProduct}>
            <CardProduct />
            <CardProduct />
          </View>
          <TitlePromotions title="Os melhores tênis" />

          <View style={styles.containerCardProduct}>
            <CardProduct />
            <CardProduct />
          </View>
          <TitlePromotions title="Os melhores tênis" />

          <View style={styles.containerCardProduct}>
            <CardProduct />
            <CardProduct />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
