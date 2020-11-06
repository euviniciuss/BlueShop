import { StyleSheet } from 'react-native';

import { GlobalColors } from '../../styles/Global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColors.colorBackground,
  },

  resetPassowrdTitle: {
    marginVertical: 25,

    color: GlobalColors.colorBackground,
    fontSize: 13,
    fontFamily: "Poppins_700Bold",
  },

  inputGroup: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  buttonLogin: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: '100%',
    padding: 10,
    borderRadius: 20,

    backgroundColor: GlobalColors.colorBackground,
  },

  textButtonLogin: {
    color: GlobalColors.colorContainer,

    fontSize: 16,
    fontFamily: "Poppins_700Bold",

  },

  textFooterAling: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',

    marginTop: 32,
  },

  footerText: {
    alignSelf: 'center',

    fontFamily: "Poppins_400Regular",
    color: GlobalColors.colorSubTitle,
  },



});

export default styles;