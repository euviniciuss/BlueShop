import { StyleSheet } from 'react-native';

import { GlobalColors } from '../../styles/Global';

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalColors.colorBackground,

    paddingTop: 40,
    paddingBottom: 40,
    paddingHorizontal: 15,

    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,

    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 28,
    fontFamily: "OleoScript_700Bold",

    color: GlobalColors.colorContainer,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: "center",

    height: 45,
    width: '100%',

    backgroundColor: GlobalColors.colorBackgroundHome,

    borderRadius: 8,

    paddingHorizontal: 16,

    marginTop: 18,

  },

  inputSearch: {
    flex: 1,

    fontSize: 15,
    fontWeight: '700',
    color: GlobalColors.colorBackground,

    marginLeft: 12,
  },

});

export default styles;