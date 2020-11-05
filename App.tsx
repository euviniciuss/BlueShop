import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';

import { OleoScript_700Bold } from '@expo-google-fonts/oleo-script';
import { Archivo_700Bold } from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';

import Routes from './src/routes/AppStack';

export default function App() {
  let [fontLoaded] = useFonts({
    OleoScript_700Bold,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontLoaded) {
    return <AppLoading />
  } else {
    return (
      <>
        <StatusBar style="light" backgroundColor="#3670ff" />
        <Routes />
      </>
    );
  }
};