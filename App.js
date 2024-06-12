import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './components/splashScreen';
import LoginScreen from './components/loginScreen';
import  Loadingpage  from './components/loading';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './components/Register';
import Loadingpage2 from './components/Loadingpage2';
import { HomepageTab } from './components/tab.js';
import { Prescription } from './components/prescriptionpage.js';


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
         <Stack.Screen
        name="loadingScreen2"
        component={Loadingpage2}
        options={{headerShown:false}}
        />
         <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name='HomePage'
        component={HomepageTab}
        options={{headerShown:false}}
        />
         {/* <Stack.Screen
        name='Prescription'
        component={Prescription}
        options={{headerShown:false}}
        /> */}

      </Stack.Navigator>
      
    </NavigationContainer>
  );
};


