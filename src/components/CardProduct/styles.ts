import { StyleSheet } from 'react-native';

import { GlobalColors } from '../../styles/Global';

const styles = StyleSheet.create({
  container: {
    width: '46%',
    height: 250,

    marginVertical: 12,
    marginHorizontal: 7,


    paddingVertical: 20,
    paddingHorizontal: 12,

    borderRadius: 10,

    backgroundColor: GlobalColors.colorContainer,

    flexDirection: "column",
    alignItems: 'center',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 1,
  },

  containerImage: {
    width: '100%',
    height: 120,

    backgroundColor: '#fbfcff',

    borderRadius: 10,
    paddingHorizontal: 8,

    alignItems: 'center',
    justifyContent: 'center',

  },

  containerDown: {
    width: '100%',

    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  titleCard: {
    color: GlobalColors.colorTitle,
    fontSize: 15,
    fontFamily: "Poppins_700Bold",
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginTop: 10,
  },

  buttonPurchase: {
    alignItems: "center",
    justifyContent: "center",

    width: '40%',

    paddingVertical: 8,

    borderRadius: 12,

    backgroundColor: GlobalColors.colorBackground,
  },


});


export default styles;
