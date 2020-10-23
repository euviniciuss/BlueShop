import React from 'react';
import { SafeAreaView, View, Text, ScrollView } from 'react-native';

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Card from '../../components/Card';

import styles from './styles';

const Home: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.productsContainer}>
        <View style={styles.containerMain}>
          <Banner />

          <View style={styles.containerTitle}>
            <Text style={styles.title}>Tênis</Text>
            <Text style={styles.subTitle}>Ver todos</Text>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 5 }}
          >
            <View style={styles.containerCard} >
              <Card />
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
