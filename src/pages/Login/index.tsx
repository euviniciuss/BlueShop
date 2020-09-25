import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import Input from '../../components/Input';

import styles from './styles';

const Login: React.FC = () => {
  const { navigate } = useNavigation();

  const handleLogin = () => {
    alert('Você fez login')
  };

  const handleNavigateToRegister = () => {
    navigate('Register')
  };

  const handleNavigateToResetPassword = () => {
    alert('Calma, essa pagina ainda está sendo construida')
  };

  return (
    <>
      <Header/>
      <View style={styles.container}>
        <Text style={styles.title}>Bem vindo de volta!</Text>
        <Text style={styles.subTitle}>Olá, faça o login para continuar</Text>

        <Input 
          label="Digite seu email" 
          placeholder="Digite seu email para fazer login"
        /> 
        <Input 
          label="Digite sua senha" 
          placeholder="Digite sua senha para fazer login"
        /> 
        
        
        <TouchableOpacity onPress={handleNavigateToResetPassword}>
          <Text style={styles.resetPassowrdTitle}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity      
        style={styles.buttonLogin}
        onPress={handleLogin}
        >
          <Text style={styles.textButtonLogin}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.textFooterAling} >
          <Text style={styles.footerText}>Ainda não tem uma conta? </Text> 
          <TouchableOpacity onPress={handleNavigateToRegister}>
            <Text style={styles.footerTextBlue}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>

      </View>
    </>
  );
}

export default Login;