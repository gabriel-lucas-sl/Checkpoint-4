import React from 'react';
import { StatusBar, View } from 'react-native';
import RelatorioCovid from './pages/RelatorioCovid/index';


export default function App() {
  return (
    <View>
      <RelatorioCovid />
      <StatusBar style="auto" />
    </View>
  );
}

