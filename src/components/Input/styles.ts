import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputGroup: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  label: {
    marginTop: 24,
    marginBottom: 12,

    color: '#6d7c94',

    fontSize: 15,
    fontFamily: "Poppins_400Regular",
  },

  input: {
      height: 54,

      backgroundColor: "#e0e3e6",

      borderRadius: 8,
      paddingHorizontal: 16,
      marginTop: 4,

      justifyContent: "center",
  },
});

export default styles;