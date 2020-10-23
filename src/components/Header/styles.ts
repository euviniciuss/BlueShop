import { StyleSheet } from 'react-native';

import { GlobalColors } from '../../styles/Global';

const styles = StyleSheet.create({

  container: {
    backgroundColor: GlobalColors.colorBackground,
    paddingTop: 50,
    paddingBottom: 40,
    paddingHorizontal: 30,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 18,
    fontFamily: "OleoScript_700Bold",

    color: GlobalColors.colorContainer,
  },

});

export default styles;