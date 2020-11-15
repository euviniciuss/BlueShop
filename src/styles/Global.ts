import { StyleSheet } from 'react-native';

export const GlobalColors = {
  colorBackground: '#3670ff',
  colorBackgroundHome: '#F1F5FE',
  colorContainer: '#fff',
  colorTitle: '#182947',
  colorSubTitle: '#6d7c94',
  colorInputBackground: '#e0e3e6',
}

export const globalStyles = StyleSheet.create({
  titlePage: {
    marginTop: 24,
    color: GlobalColors.colorTitle,
    fontSize: 24,
    fontFamily: "Poppins_700Bold",
  },

  subTitlePage: {
    color: GlobalColors.colorSubTitle,
    fontSize: 15,
    fontFamily: "Poppins_400Regular",
  },

  formContainer: {
    
    backgroundColor: GlobalColors.colorContainer,

    paddingTop: 10,
    paddingHorizontal: 30,

    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,

    marginTop: -15,

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

  footerLink: {
    fontFamily: "Poppins_700Bold",
    color: GlobalColors.colorBackground,
  },

});