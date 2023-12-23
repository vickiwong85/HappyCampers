import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

const Map = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '50%',
    height: '50%',
  }
});

export default Map;