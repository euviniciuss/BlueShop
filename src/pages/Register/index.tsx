import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';

import firebase from 'firebase';

import { globalStyles } from '../../styles/Global';
import styles from './styles';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let passwordInput: any;

  const { navigate } = useNavigation();

  const handleRegister = () => {

    if (!email || !password) {
      alert('Você precisa informar email e senha para fazer o cadastro');
    } else {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(sucess => {
          alert('Usuário cadastrado com sucesso!')
          setTimeout(() => {
            navigate('Landing');
          }, 1000);
        }).catch(erro => {
          alert(erro)
        })
    }

  };

  const handleNavigateToLogin = () => {
    navigate('Login');
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior="position">

          <Header logo="Blueshop" />
          <View style={styles.formContainer}>
            <Text style={globalStyles.titlePage}>Seja bem vindo!</Text>
            <Text style={globalStyles.subTitlePage}>Olá, faça seu cadastro para continuar</Text>

            <View style={styles.inputGroup}>
              <Text style={globalStyles.label}>Email</Text>
              <TextInput
                style={globalStyles.input}
                placeholder='Digite seu email para fazer o cadastro'
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
                placeholder='Digite sua senha para fazer o cadastro'
                placeholderTextColor="#6d7c94"
                secureTextEntry={true}
                blurOnSubmit={true}
                ref={(input) => { passwordInput = input; }}
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
                <Text style={globalStyles.footerLink}>Entre aqui</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}

export default Register;