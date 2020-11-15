import { StyleSheet } from 'react-native';

import { GlobalColors } from '../../styles/Global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColors.colorContainer,
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
    marginTop: 30,

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