import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#3670ff',
  },
  title: {
    fontSize: 24,
    fontFamily: "Archivo_600SemiBold",

    alignSelf: 'center',
    alignContent: 'center',
    
    color: '#fff',
  },
  containerButton: {
    display: "flex",
    flexDirection: "column",
  },

  textButtonLogin: {
    color: '#3670ff',

    fontSize: 16,
    fontFamily: "Poppins_700Bold",

  },

  textButtonRegister: {
    color: '#fff',

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

    backgroundColor: '#fff',
  },

  buttonRegister: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: 270,
    padding: 12,
    marginTop: 15,
    borderRadius: 7,

    backgroundColor: '#3670ff',
    borderWidth: 3,
    borderColor: '#fff',
  },

});

export default styles;