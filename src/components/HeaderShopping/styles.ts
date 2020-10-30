import { StyleSheet } from 'react-native';

import { GlobalColors } from '../../styles/Global';

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalColors.colorBackground,
    paddingTop: 50,
    paddingBottom: 40,
    paddingHorizontal: 12,

    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 30,
    fontFamily: "OleoScript_700Bold",

    color: GlobalColors.colorContainer,
  },

  passwordContainer: {
    flexDirection: 'row',
    alignItems: "center",
    
    height: 45,
    width: '100%',

    backgroundColor: GlobalColors.colorContainer,

    borderRadius: 8,
    paddingHorizontal: 16,

    marginTop: 18,
   
  },

  inputSearch: {
    flex: 1,

    fontSize: 15,
    fontWeight: '700',
    color: '#3670ff',
    
    marginLeft: 12,
  },

});

export default styles;