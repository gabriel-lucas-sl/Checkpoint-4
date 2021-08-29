import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import RelatorioCovid from './pages/RelatorioCovid/index';


export default function App() {
  return (
    <View>
      <RelatorioCovid />
      <StatusBar style="auto" />
    </View>
  );
}

