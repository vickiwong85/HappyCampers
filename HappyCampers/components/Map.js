import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View } from 'react-native';

const Map = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      <Text>Data source: ridb.recreation.gov</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  map: {
    width: '100%',
    height: '70%',
  }
});

export default Map;