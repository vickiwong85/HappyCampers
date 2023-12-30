import React, { useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text, Modal, TextInput, View, Button, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

const SearchForm = ({ navigation }) => {
  const [text, onChangeText] = useState('');
  const [markers, setMarkers] = useState([]);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  function searchRecreationAreas(queryString) {
    console.log(queryString)
    axios.get('https://ridb.recreation.gov/api/v1/recareas', {
      params: {
        apikey: process.env.APIKEY,
        accept: 'application/json',
        query: queryString,
        limit: 5,
        offset: 0,
      }
    })
      .then((result) => {
        console.log(result.data.RECDATA[1].RecAreaID);
        const recAreaId = result.data.RECDATA[1].RecAreaID;
        axios.get(`https://ridb.recreation.gov/api/v1/recareas/${recAreaId}/facilities`, {
          params: {
            apikey: process.env.APIKEY,
            accept: 'application/json',
            limit: 1
          }
        })
          .then((result) => {
            console.log(result.data.RECDATA[0].FacilityID);
            const facilityID = result.data.RECDATA[0].FacilityID;
            axios.get(`https://ridb.recreation.gov/api/v1/facilities/${facilityID}/campsites`, {
              params: {
                apikey: process.env.APIKEY,
                limit: 1
              }
            })
              .then((result) => {
                result.data.RECDATA.forEach((d) => {
                  axios.get(`https://ridb.recreation.gov/api/v1/facilities/${facilityID}/links`, {
                  params: {
                    apikey: process.env.APIKEY,
                    facilityID
                  }
                })
                  .then((result) => {
                    console.log(result.data.RECDATA[0].URL);
                    setMarkers([{
                      title: d.ENTITYMEDIA[0].Title,
                      longitude: d.CampsiteLongitude,
                      latitude: d.CampsiteLatitude,
                      latitudeDelta: 0.01,
                      longitudeDelta: 0.01,
                      url: result.data.RECDATA[0].URL,
                      id: d.CampsiteID,
                    }]);
                  })
                  .catch((err) => {
                    console.log({err});
                    setShowErrorMessage(true);
                  })
                })
              })
              .catch((err) => {
                console.log({err});
                setShowErrorMessage(true);
              })
          })
          .catch((err) => {
            console.log({err});
            setShowErrorMessage(true);
          })
      })
      .catch((err) => {
        console.log({err})
        setShowErrorMessage(true);
      })
  }

  function handleSearch() {
    searchRecreationAreas(text);
    if (markers.length) {
      navigation.navigate('Map', {
        markers
      });
    }
  }

  return (
    <View>
      <Text style={styles.label}>Search by name of location or area: </Text>
      <TextInput style={styles.input} value={text} onChangeText={onChangeText}/>
      <Button title="Go!" onPress={() => handleSearch()}/>
      <Modal
        visible={showErrorMessage}
        animationType='slide'
        onRequestClose={() => setShowErrorMessage(false)}
      transparent={true}
      >
        <TouchableOpacity
        onPressOut={() => setShowErrorMessage(false)}
        >
          <TouchableWithoutFeedback>
            <View style={styles.modal}>
              <Text>No campsites found.</Text>
              <Text>Try again!</Text>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </View>
  )
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  label : {
    padding: 15,
    fontSize: 15,
  },
  modal: {
    marginTop: 350,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: '30%',
  },
});

export default SearchForm;