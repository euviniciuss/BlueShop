import React, { useState } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, SafeAreaView, TextInput } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';

import firebase from '../../config/firebase';

import { globalStyles } from '../../styles/Global';
import styles from './styles';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let passwordInput: any;

  const { navigate } = useNavigation();

  const handleLogin = () => {
    navigate('BottomTabNavigator')
    // firebase.auth().signInWithEmailAndPassword(email, password)
    //   .then(sucess => {
    //     alert('Você fez login');

    //     setTimeout(() => {
    //       navigate('Landing');
    //     }, 1000);
    //   }).catch(erro => {
    //     alert('Ops! Algo deu errado');
    //   })
  };

  const handleNavigateToRegister = () => {
    navigate('Register')
  };

  const handleNavigateToResetPassword = () => {
    alert('Calma, essa pagina ainda está sendo construida')
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior="position">

          <Header />
          <View style={globalStyles.formContainer}>
            <Text style={globalStyles.titlePage}>Bem vindo de volta!</Text>
            <Text style={globalStyles.subTitlePage}>Olá, faça o login para continuar</Text>

            <View style={styles.inputGroup}>
              <Text style={globalStyles.label}>Email</Text>
              <TextInput
                style={globalStyles.input}
                placeholder='Digite seu email para fazer login'
                placeholderTextColor="#6d7c94"
                keyboardType="email-address"
                returnKeyType={"next"}
                onSubmitEditing={() => { passwordInput.focus(); }}
                blurOnSubmit={false}
                value={email}
                onChangeText={setEmail}
              />

              <Text style={globalStyles.label}>Senha</Text>
              <TextInput
                style={globalStyles.input}
                placeholder='Digite sua senha para fazer login'
                placeholderTextColor="#6d7c94"
                secureTextEntry={true}
                blurOnSubmit={true}
                ref={(input) => { passwordInput = input; }}
                value={password}
                onChangeText={setPassword}
              />
            </View>

            <TouchableOpacity style={{ width: '50%' }} onPress={handleNavigateToResetPassword}>
              <Text style={styles.resetPassowrdTitle}>Esqueceu a senha?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonLogin}
              activeOpacity={0.9}
              onPress={handleLogin}
            >
              <Text style={styles.textButtonLogin}>Entrar</Text>
            </TouchableOpacity>

            <View style={styles.textFooterAling} >
              <Text style={styles.footerText}>Ainda não tem uma conta? </Text>
              <TouchableOpacity onPress={handleNavigateToRegister}>
                <Text style={globalStyles.footerLink}>Cadastre-se</Text>
              </TouchableOpacity>
            </View>

          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}

export default Login;