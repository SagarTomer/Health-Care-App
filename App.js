import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './components/splashScreen';
import LoginScreen from './components/loginScreen';
import  Loadingpage  from './components/loading';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
        name="loadingScreen"
        component={Loadingpage}
        options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


