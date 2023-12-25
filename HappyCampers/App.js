import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './components/SplashScreen.js';
import Map from './components/Map.js';
import HomeScreen from './components/HomeScreen.js';
import Reservations from './components/Reservations.js';
import SearchForm from './components/SearchForm.js';
import ReservationPage from './components/ReservationPage.js';

export default function App() {
  const [renderSplashScreen, setRenderSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => setRenderSplashScreen(false), 3000);
  }, [])

  const Stack = createNativeStackNavigator();

  return (
    renderSplashScreen ? <SplashScreen /> : (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={
          {
            headerStyle: {
              backgroundColor: '#BACC81',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              textAlign: 'center'
            },
            headerTitleAlign: 'center'
          }
        }
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{title: "Dashboard" }}/>
        <Stack.Screen name="Reservations" component={Reservations} options={{title: 'My Reservations'}}/>
        <Stack.Screen name="Reservation Page" component={ReservationPage} options={{title: 'Reservation'}}/>
        <Stack.Screen name="SearchForm" component={SearchForm} options={{title: 'Search'}}/>
        <Stack.Screen name="Map" component={Map} options={{title: 'Map'}}/>
      </Stack.Navigator>
    </NavigationContainer>
    )
  );
}
