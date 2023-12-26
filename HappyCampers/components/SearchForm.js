import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

const SearchForm = ({ navigation }) => {
  const [text, onChangeText] = useState('');

  function searchRecreationAreas(queryString) {
    console.log(queryString)
    axios.get('https://ridb.recreation.gov/api/v1/recareas', {
      params: {
        apikey: process.env.APIKEY,
        accept: 'application/json',
        query: queryString,
        limit: 2,
        offset: 0,
      }
    })
      .then((result) => {
        console.log(result.data.RECDATA[1].RecAreaID);
        const recAreaId = result.data.RECDATA[1].RecAreaID
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
                console.log(result.data.RECDATA[0].ENTITYMEDIA[0].Title);
                console.log(result.data.RECDATA[0].ENTITYMEDIA[0].URL);
                axios.get(`https://ridb.recreation.gov/api/v1/facilities/${facilityID}/links`, {
                  params: {
                    apikey: process.env.APIKEY,
                    facilityID
                  }
                })
                  .then((result) => {
                    console.log(result.data.RECDATA[0].URL);
                  })
                  .catch((err) => {
                    console.log({err})
                  })
              })
              .catch((err) => {
                console.log({err})
              })
          })
          .catch((err) => {
            console.log({err})
          })
      })
      .catch((err) => {
        console.log({err})
      })
  }

  function handleSearch() {
    searchRecreationAreas(text);
    navigation.navigate('Map');
  }

  return (
    <View>
      <Text style={styles.label}>Search by name of location or area: </Text>
      <TextInput style={styles.input} value={text} onChangeText={onChangeText}/>
      <Button title="Go!" onPress={() => handleSearch()}/>
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
  }
});

export default SearchForm;