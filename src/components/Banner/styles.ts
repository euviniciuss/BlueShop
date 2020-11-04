import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerCarrousel: {
    width: '100%',
    height: 180,

    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 10,
  },

  carousel: {
    flex: 1,
    overflow: 'visible',
  },

  carouselImg: {
    width: 250,
    height: 180,

    alignSelf: 'center',

    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default styles;