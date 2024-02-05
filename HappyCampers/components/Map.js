import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const Map = ({ route, navigation }) => {

  const { markers } = route.params;

  const [ isPressed, setIsPressed ] = React.useState(false);

  var touchProps = {
    activeOpacity: 0.2,
    underlayColor: 'light gray',
    style: styles.resultItem,
    onHideUnderlay: () => setIsPressed(false),
    onShowUnderlay: () => setIsPressed(true),
    onPress: () => console.log('isPressed'),
  };

  console.log('in Map', {markers})

  const initialRegion = {
    latitude: 37.7513572400001,
    longitude: -119.735838815,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <View style={styles.container}>
      {<MapView
        style={styles.map}
        initialRegion={initialRegion}
        >
        {markers.map((marker) => {
          return (<Marker key={marker.id} coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude,
            latitudeDelta: marker.latitudeDelta,
            longitudeDelta: marker.longitudeDelta,
          }}/>)}
        )}
      </MapView>}
      <View style={styles.resultsPanel}>
      {markers.map((marker,i) => {
        return (
          <TouchableHighlight key={marker.title}  {...touchProps}>
          <View>
          <Text>{`${i + 1}. ${marker.title}`}</Text>
          </View>
          </TouchableHighlight>
        )
      })}
      </View>
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
  },
  resultItem: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  resultsPanel: {
    borderColor: 'gray',
    borderRadius: 30,
    borderWidth: 2,
    height: 300,
    width: 350,
    padding: '5%',
    margin: '4%',
  }
});

export default Map;