import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./assets/happycampers.jpg')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    flex: 1,
    width: '80%',
    height: '80%',
    resizeMode: 'contain'
  },
});

export default SplashScreen;