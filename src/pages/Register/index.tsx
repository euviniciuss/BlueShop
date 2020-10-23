import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';

import firebase from 'firebase';

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

          <Header />
          <View style={styles.formContainer}>
            <Text style={styles.title}>Seja bem vindo!</Text>
            <Text style={styles.subTitle}>Olá, faça seu cadastro para continuar</Text>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder='Digite seu email para fazer o cadastro'
                placeholderTextColor="#6d7c94"
                keyboardType="email-address"
                returnKeyType={"next"}
                onSubmitEditing={() => { passwordInput.focus(); }}
                blurOnSubmit={false}
                value={email}
                onChangeText={setEmail}
              />

              <Text style={styles.label}>Senha</Text>
              <TextInput
                style={styles.input}
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
                <Text style={styles.footerTextBlue}>Entre aqui</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}

export default Register;