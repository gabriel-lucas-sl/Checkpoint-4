import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Relatorio from './pages/RelatorioCovidPage/relatorio';


export default function App() {
  return (
    <View>
      <Relatorio></Relatorio>
      <StatusBar style="auto" />
    </View>
  );
}

