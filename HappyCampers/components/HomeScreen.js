import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.button} onStartShouldSetResponder={() => navigation.navigate('SearchForm')}>
        <Image source={require('../assets/map.jpg')}></Image>
        <Text style={styles.cardText}>Search Campsite</Text>
      </View>
      <View style={styles.button} onStartShouldSetResponder={() => navigation.navigate('Reservations')}>
        <Image source={require('../assets/tent.jpg')}></Image>
        <Text style={styles.cardText}>My Reservations</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

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
    color: '#1A4314',
    textAlign: 'center',
    fontSize: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#BACC81',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
