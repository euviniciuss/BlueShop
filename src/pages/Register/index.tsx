import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import Input from '../../components/Input';

import styles from './styles';

const Register: React.FC = () => {
  const { navigate } = useNavigation();

  const handleRegister = () => {
    alert('Você foi cadastrado')
  };

  const handleNavigateToLogin = () => {
    navigate('Login')
  };

  return (
    <>
      <Header/>
      <View style={styles.container}>
        <Text style={styles.title}>Seja bem vindo!</Text>
        <Text style={styles.subTitle}>Olá, faça seu cadastro para continuar</Text>

        <Input 
          label="Digite seu email" 
          placeholder="Digite seu email para fazer o cadastro"
        /> 
        <Input 
          label="Digite sua senha" 
          placeholder="Digite sua senha para fazer o cadastro"
        /> 

        <TouchableOpacity      
        style={styles.buttonLogin}
        onPress={handleRegister}
        >
          <Text style={styles.textButtonLogin}>Cadastre-se</Text>
        </TouchableOpacity>

        <View style={styles.textFooterAling} >
          <Text style={styles.footerText}>Já possui uma conta? </Text> 
          <TouchableOpacity onPress={handleNavigateToLogin}>
            <Text style={styles.footerTextBlue}>Entre aqui</Text>
          </TouchableOpacity>
        </View>

      </View>
    </>
  );
}

export default Register;