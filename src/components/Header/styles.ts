import { StyleSheet } from 'react-native';

import { GlobalColors } from '../../styles/Global';

const styles = StyleSheet.create({

  container: {
    backgroundColor: GlobalColors.colorBackground,

    paddingTop: 35,
    paddingBottom: 20,
    paddingHorizontal: 30,

  },

  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'space-between',
  },

  logo: {
    fontSize: 18,
    fontFamily: "OleoScript_700Bold",

    color: GlobalColors.colorContainer,
  },

  title: {
    color: GlobalColors.colorContainer,

    fontSize: 20,
    fontFamily: "Poppins_700Bold",

    marginLeft: -5,
  },

});

export default styles;