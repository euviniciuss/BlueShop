import React, { useState, useRef } from 'react';
import { Dimensions, View, Image } from 'react-native';

import Carousel from 'react-native-snap-carousel';

import styles from './styles';

const { width: screenWidth } = Dimensions.get('window');

const Banner: React.FC = () => {
  const carouselRef = useRef(null);

  const [listProducts, setListProducts] = useState([
    {
      title: "Outubro Econômico",
      img: 'https://www.maxmilhas.com.br/blog/wp-content/uploads/2019/10/outubro-economico_post-blog_300x300px-770x450.png'
    },
    {
      title: "Burguer King",
      img: 'https://www.infomoney.com.br/wp-content/uploads/2019/11/BK-e-Mercado-Pago.jpg?fit=1300%2C731&quality=75&strip=all'
    },
    {
      title: "Samsung",
      img: 'https://i.ytimg.com/vi/XplsaVdeXwQ/maxresdefault.jpg'
    },
    {
      title: "Nike",
      img: 'https://controlf5mkt.com.br/blog/wp-content/uploads/2019/02/estrategia-de-marketing-inspiradora-nike-Blog-1.jpg'
    },
    {
      title: "Coca Cola",
      img: 'https://www.cocacolabrasil.com.br/content/dam/journey/br/pt/private/stories/2020/gas-de-verao-coca-cola-release.png'
    },
    {
      title: "Iphone",
      img: 'https://blogdoiphone.com/wp-content/uploads/2017/05/Switch_iPhone_1-1.jpg'
    },
  ]);

  const _renderItem = ({ item }) => {
    return (
      <View>
        <Image
          source={{ uri: item.img }}
          style={styles.carouselImg}
        />
      </View>
    );
  };

  return (
    <View style={styles.containerCarrousel}>
      <Carousel
        style={styles.carousel}
        ref={carouselRef}
        data={listProducts}
        renderItem={_renderItem}
        sliderWidth={screenWidth}
        itemWidth={250}
        inactiveSlideOpacity={0.5}
      />
    </View>
  );
}



export default Banner;
