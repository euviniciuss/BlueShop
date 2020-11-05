import { StyleSheet } from 'react-native';

import { GlobalColors } from '../../styles/Global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: GlobalColors.colorContainer,
  },

  containerMain: {
    width: '100%',

    justifyContent: "center",
    alignItems: 'flex-start',

    paddingHorizontal: 12,
    marginBottom: 25,
  },

  productsContainer: {
    backgroundColor: GlobalColors.colorBackgroundHome,
  },

  containerTitle: {
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",

    marginTop: 24,
  },

  containerCard: {
    flexDirection: 'row',
  },

  containerCardProduct: {
    flexDirection: 'row',
  },

  title: {
    color: GlobalColors.colorTitle,
    fontSize: 24,
    fontFamily: "Poppins_700Bold",
  },

  subTitle: {
    color: GlobalColors.colorSubTitle,
    fontSize: 15,
    fontFamily: "Poppins_400Regular",
  },

});

export default styles;