import React from 'react';
import { Image } from 'react-native';

import bannerImg from '../../assets/images/banner.jpg';

import styles from './styles';


const Banner: React.FC = () => {
  return (
    <Image source={bannerImg} style={styles.container} />
  );
};

export default Banner;
