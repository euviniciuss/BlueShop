import React from 'react';

import { SafeAreaView, FlatList, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import HeaderPages from '../../components/HeaderPages';

import styles from './styles';

const Categories: React.FC = () => {
  const listProducts = [
    { id: '1', desc: 'Moda' },
    { id: '2', desc: 'Celular e SmartPhone' },
    { id: '3', desc: 'TV e Vídeo' },
    { id: '4', desc: 'Informática' },
    { id: '5', desc: 'Eletrodomésticos' },
    { id: '6', desc: 'Games' },
    { id: '7', desc: 'Mercado' },
    { id: '8', desc: 'Pet Shop' },
    { id: '9', desc: 'Casa' },
    { id: '10', desc: 'Cozinha' },
    { id: '11', desc: 'Papelaria' },
  ];

  return (
    <SafeAreaView>
      <HeaderPages title="Categorias"/>
      <FlatList
        data={listProducts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.containerItems}>
            <Text style={styles.textItem}>{item.desc}</Text>
            <Feather 
              name="chevron-right"
              size={23}
              color="#3670ff"
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Categories;
