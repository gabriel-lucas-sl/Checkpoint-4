import React from 'react';
import { StatusBar, View } from 'react-native';
import RelatorioCovid from './pages/RelatorioCovid/index';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="RelatorioCovid">
          <Stack.Screen
            name="RelatorioCovid"
            component={RelatorioCovid}
            options = {{
              title: "Relatorio COVID-19",
              headerStyle: {
                backgroundColor: '#3DB2FF',
              }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}

