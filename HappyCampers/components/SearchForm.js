import React from 'react';
import { Text, View, Button } from 'react-native';

const SearchForm = ({ navigation }) => {
  return (
    <View>
      <Text>Search for a campsite: </Text>
      <Button title="Go!" onPress={() => navigation.navigate('Map')}/>
    </View>
  )
};

export default SearchForm;