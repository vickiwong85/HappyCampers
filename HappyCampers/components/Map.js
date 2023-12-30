import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View } from 'react-native';

const Map = ({ route, navigation }) => {

  const { markers } = route.params;

  console.log({markers})

  const initialRegion = {
    latitude: 37.8272042070001,
    longitude: -119.596809489,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <View style={styles.container}>
      {markers.length && <MapView
        style={styles.map}
        initialRegion={initialRegion}
        >
        {markers.map((marker) =>
          <Marker key={marker.CampsiteID} coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude,
            latitudeDelta: marker.latitudeDelta,
            longitudeDelta: marker.longitudeDelta,
          }}/>
        )}
      </MapView>}
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
    height: '50%',
  }
});

export default Map;