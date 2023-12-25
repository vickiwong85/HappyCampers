import React from 'react';
import { Text, View } from 'react-native';

const Reservations = ({ navigation }) => {
  return (
    <View >
      <Text>My Reservations</Text>
      <Text onPress={() => navigation.navigate('Reservation Page')}>Big Bend</Text>
    </View>
  );
};

export default Reservations;