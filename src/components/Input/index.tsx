import React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

interface InputProps {  
  label: string;
  placeholder: string;
};

const Input: React.FC<InputProps> = ({ label, placeholder }) => {
  return (
    <View style={styles.inputGroup}> 
      <Text style={styles.label}>{label}</Text>
      <TextInput 
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#6d7c94"
      />
    </View>
  );
};

export default Input;
