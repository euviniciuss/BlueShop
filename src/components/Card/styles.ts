import { StyleSheet } from 'react-native';

import { GlobalColors } from '../../styles/Global';

const styles = StyleSheet.create({
  container: {
    width: 330,
    height: 170,

    marginTop: 20,
    marginHorizontal: 7,

    paddingVertical: 20,
    paddingHorizontal: 12,

    borderRadius: 10,

    backgroundColor: '#f4f6ff',

    flexDirection: "row",
    alignItems: 'flex-start',
  },

  containerImage: {
    width: '40%',
    height: '100%',

    backgroundColor: '#fbfcff',

    borderRadius: 10,
    marginRight: 15,
    paddingHorizontal: 8,

    alignItems: 'center',
    justifyContent: 'center',
    
  },

  containerRight: {
    width: '54%',
    height: '100%',
    
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  titleCard: {
    color: GlobalColors.colorTitle,
    fontSize: 17,
    fontFamily: "Poppins_700Bold",
  },

  descriptionCard: {
    color: GlobalColors.colorSubTitle,
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginTop: 5,
  },

  buttonPurchase:{
    alignItems: "center",
    justifyContent: "center",

    width: '40%',
    padding: 10,
    borderRadius: 10,

    backgroundColor: GlobalColors.colorBackground,
  },

  textButton: {
    color: GlobalColors.colorContainer,

    fontSize: 9.5,
    fontFamily: "Poppins_700Bold",
  },
  

});


export default styles;
