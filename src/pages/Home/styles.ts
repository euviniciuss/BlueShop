import { StyleSheet } from 'react-native';

import { GlobalColors } from '../../styles/Global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: GlobalColors.colorContainer,
  },

  containerMain: {
    marginTop: 25,
    width: '100%',

    justifyContent: "center",
    alignItems: 'flex-start',
  },

  productsContainer: {

    backgroundColor: GlobalColors.colorContainer,

    marginTop: -15,

    paddingTop: 10,
    paddingHorizontal: 15,

    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,

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