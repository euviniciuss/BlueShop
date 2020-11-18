import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  containerItems: {
    padding: 25,

    borderBottomWidth: 1,
    borderBottomColor: '#ccc',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
  },

  textItem: {
    fontSize: 18,
    fontFamily: 'Poppins_700Bold',

    color: '#182947',

  },
});

export default styles;