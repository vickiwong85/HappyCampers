import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './SplashScreen.js';
import Map from './Map.js';
import HomeScreen from './HomeScreen.js';
import Reservations from './Reservations.js';

export default function App() {
  const [renderSplashScreen, setRenderSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => setRenderSplashScreen(false), 3000);
  }, [])

  const Stack = createNativeStackNavigator();

  return (
    renderSplashScreen ? <SplashScreen /> : (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Reservations" component={Reservations} options={{title: 'My Reservations'}}/>
      </Stack.Navigator>
    </NavigationContainer>
    )
  );
}
