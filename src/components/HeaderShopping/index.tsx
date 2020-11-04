import React from 'react';
import { SafeAreaView, View, Text, TextInput } from 'react-native';

import { Feather } from '@expo/vector-icons';

import styles from './styles';

const HeaderShopping: React.FC = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>BlueShop</Text>
        <View style={styles.searchContainer}>
          <Feather
            name="search"
            size={18} color="#3670ff"
          />
          <TextInput
            style={styles.inputSearch}
            placeholder="Pesquisar"
            placeholderTextColor="#3670ff"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default HeaderShopping;
