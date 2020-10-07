import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';

import { Archivo_400Regular, Archivo_600SemiBold, Archivo_700Bold } from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';

import Routes from './routes';

export default function App() {
  let [fontLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_600SemiBold,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold
  });

  if (!fontLoaded) {
    return <AppLoading />
  } else {
    return (
      <>
        <StatusBar style="light" />
        <Routes />
      </>
    );
  }
};