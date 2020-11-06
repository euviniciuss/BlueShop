import React from 'react';

import { SafeAreaView, FlatList, Text, View } from 'react-native';

import Header from '../../components/Header';

import styles from './styles';

const Categories: React.FC = () => {
  const listProducts = [
    { id: '1', desc: 'Produto 1' },
    { id: '2', desc: 'Produto 2' },
    { id: '3', desc: 'Produto 3' },
    { id: '4', desc: 'Produto 4' },
    { id: '5', desc: 'Produto 5' },
    { id: '6', desc: 'Produto 6' },
    { id: '7', desc: 'Produto 7' },
    { id: '11', desc: 'Produto 1' },
    { id: '21', desc: 'Produto 2' },
    { id: '31', desc: 'Produto 3' },
    { id: '41', desc: 'Produto 4' },
    { id: '51', desc: 'Produto 5' },
    { id: '61', desc: 'Produto 6' },
    { id: '71', desc: 'Produto 7' },
    { id: '12', desc: 'Produto 1' },
    { id: '22', desc: 'Produto 2' },
    { id: '32', desc: 'Produto 3' },
    { id: '42', desc: 'Produto 4' },
    { id: '52', desc: 'Produto 5' },
    { id: '62', desc: 'Produto 6' },
    { id: '72', desc: 'Produto 7' },
  ];

  return (
    <SafeAreaView>
      <Header logo="" title="Categorias" />
      <FlatList
        data={listProducts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.containerItems}>
            <Text style={styles.textItem}>{item.desc}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Categories;
