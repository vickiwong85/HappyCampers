import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import DetailsModal from './DetailsModal.js';

const Reservations = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');

  const handleClick = (title) => {
    setModalVisible(true);
    setModalTitle(title);
  }

  return (
    <View >
      <Text>Reservation Page</Text>
      <Text>Date: 1/1/2024 - 1/5/2024</Text>
      <Button onPress={() => handleClick('Details')} title="Details" />
      <Button onPress={() => handleClick('Weather')} title="Weather" />
      <Button onPress={() => handleClick('Packing List')} title="Packing List" />
      <Button onPress={() => handleClick('Hiking Trails')} title="Hiking Trails" />
      <Button onPress={() => handleClick('Recipes')} title="Recipes" />
      <DetailsModal modalVisible={modalVisible} setModalVisible={setModalVisible} title={modalTitle}/>
    </View>
  );
};

export default Reservations;