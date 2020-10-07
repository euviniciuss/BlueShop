import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';

import styles from './styles';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { navigate } = useNavigation();

  const handleRegister = () => {
    navigate('Landing');
  };

  const handleNavigateToLogin = () => {
    navigate('Login');
  };

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text style={styles.title}>Seja bem vindo!</Text>
        <Text style={styles.subTitle}>Olá, faça seu cadastro para continuar</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder='Digite seu email para fazer login'
            placeholderTextColor="#6d7c94"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder='Digite sua senha para fazer login'
            placeholderTextColor="#6d7c94"
            value={password}
            onChangeText={setPassword}
          />
        </View>

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