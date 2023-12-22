import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react'
import { StyleSheet, Button, Text, View, Image } from 'react-native';
import SplashScreen from './SplashScreen.js';
import Map from './Map.js';

export default function App() {
  const [renderSplashScreen, setRenderSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => setRenderSplashScreen(false), 3000);
  }, [])

  return (
    renderSplashScreen ? <SplashScreen /> : (
    <View style={styles.container}>
      <View style={styles.button}>
        <Image source={require('./assets/map.jpg')}></Image>
        <Text style={styles.cardText}>Search Campsite</Text>
      </View>
      <View style={styles.button}>
        <Image source={require('./assets/tent.jpg')}></Image>
        <Text style={styles.cardText}>My Reservations</Text>
      </View>
      <StatusBar style="auto" />
    </View>
    )
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    borderColor: 'white',
    borderRadius: 30,
    borderWidth: 2,
    height: 300,
    justifyContent: 'center',
    padding: '3%',
    margin: '4%'
  },
  cardText: {
    color: 'blue',
    textAlign: 'center',
    fontSize: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#d22e2e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
