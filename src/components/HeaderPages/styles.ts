import { StyleSheet } from 'react-native';

import { GlobalColors } from '../../styles/Global';

const styles = StyleSheet.create({

  container: {
    backgroundColor: GlobalColors.colorBackground,

    marginTop: 23,
    paddingVertical: 20,
    paddingHorizontal: 30,

  },

  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'flex-start',
  },

  title: {
    fontSize: 18,
    fontFamily: "Poppins_700Bold",

    marginLeft: '28%',

    color: GlobalColors.colorContainer,
  },

});

export default styles;