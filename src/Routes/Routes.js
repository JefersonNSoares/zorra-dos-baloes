import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Welcome} from '../pages/Welcome'
import {GameSound} from '../pages/Game';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Welcome"
      screenOptions={{ headerStyle:{ backgroundColor:"#CFB8FF"}}}>
        <Stack.Screen name="Bem Vindo" component={Welcome}/>
        <Stack.Screen name="Clica em um Balão" component={GameSound}/>
      </Stack.Navigator>
      </NavigationContainer>
  );
}