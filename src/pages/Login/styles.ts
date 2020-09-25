import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',

    marginTop: -15,

    paddingTop: 10,
    paddingHorizontal: 30,

    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,

  },

  title: {
    marginTop: 24,
    color: '#182947',
    fontSize: 24,
    fontFamily: "Poppins_700Bold",
  },

  resetPassowrdTitle: {
    marginVertical: 25,

    color: '#3670ff',
    fontSize: 13,
    fontFamily: "Poppins_700Bold",
  },

  subTitle: {
    color: '#6d7c94',
    fontSize: 15,
    fontFamily: "Poppins_400Regular",
  },
  
  buttonLogin: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: '100%',
    padding: 10,
    borderRadius: 20,

    backgroundColor: '#3670ff',
  },

  textButtonLogin: {
    color: '#fff',

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
    color: '#6d7c94',
  },

  footerTextBlue: {
    fontFamily: "Poppins_700Bold",
    color: '#3670ff',
  },

});

export default styles;