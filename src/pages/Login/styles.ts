import { StyleSheet } from 'react-native';

import { GlobalColors } from '../../styles/Global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColors.colorContainer,
  },

  formContainer: {

    backgroundColor: GlobalColors.colorContainer,

    marginTop: -15,

    paddingTop: 10,
    paddingHorizontal: 30,

    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,

  },

  title: {
    marginTop: 24,
    color: GlobalColors.colorTitle,
    fontSize: 24,
    fontFamily: "Poppins_700Bold",
  },

  resetPassowrdTitle: {
    marginVertical: 25,

    color: GlobalColors.colorBackground,
    fontSize: 13,
    fontFamily: "Poppins_700Bold",
  },

  subTitle: {
    color: GlobalColors.colorSubTitle,
    fontSize: 15,
    fontFamily: "Poppins_400Regular",
  },

  inputGroup: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  label: {
    marginTop: 24,
    marginBottom: 12,

    color: GlobalColors.colorSubTitle,

    fontSize: 15,
    fontFamily: "Poppins_400Regular",
  },

  input: {
    height: 54,

    backgroundColor: GlobalColors.colorInputBackground,

    borderRadius: 8,
    paddingHorizontal: 16,
    marginTop: 4,

    justifyContent: "center",
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

  footerTextBlue: {
    fontFamily: "Poppins_700Bold",
    color: GlobalColors.colorBackground,
  },

});

export default styles;