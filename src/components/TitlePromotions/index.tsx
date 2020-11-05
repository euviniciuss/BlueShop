import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

interface TitlePromotionsProps {
  title: string;
};

const TitlePromotions: React.FC<TitlePromotionsProps> = ({ title }) => {
  return (
    <View>
      <Text style={styles.titleProducts}>{title}</Text>
    </View>
  );
}



export default TitlePromotions;
