import { StyleSheet } from 'react-native';

import { GlobalColors } from '../../styles/Global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: GlobalColors.colorBackground,
  },
  title: {
    fontSize: 52,
    fontFamily: "OleoScript_700Bold",

    alignSelf: 'center',
    alignContent: 'center',

    color: GlobalColors.colorContainer,
  },
  containerButton: {
    display: "flex",
    flexDirection: "column",
  },

  textButtonLogin: {
    color: GlobalColors.colorBackground,

    fontSize: 16,
    fontFamily: "Poppins_700Bold",

  },

  textButtonRegister: {
    color: GlobalColors.colorContainer,

    fontSize: 16,
    fontFamily: "Poppins_700Bold",
  },

  buttonLogin: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: 270,
    padding: 15,
    borderRadius: 7,

    backgroundColor: GlobalColors.colorContainer,
  },

  buttonRegister: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: 270,
    padding: 12,
    marginTop: 15,
    borderRadius: 7,

    backgroundColor: GlobalColors.colorBackground,
    borderWidth: 3,
    borderColor: GlobalColors.colorContainer,
  },

});

export default styles;