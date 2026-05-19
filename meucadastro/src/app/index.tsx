import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CadastroScreen from '../../screens/CadastroScreen';
import EdicaoScreen from '../../screens/EdicaoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cadastro"
        component={CadastroScreen}
      />

      <Stack.Screen
        name="Edicao"
        component={EdicaoScreen}
      />
    </Stack.Navigator>
  );
}