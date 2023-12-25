import React from 'react';
import { Text, View, Modal, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

const DetailsModal = ({modalVisible, setModalVisible, title}) => {
  return (
    <View>
      <Modal
      visible={modalVisible}
      animationType="slide"
      onRequestClose={() => setModalVisible(false)}
      transparent={true}
      >
        <TouchableOpacity
        onPressOut={() => setModalVisible(false)}
        >
          <TouchableWithoutFeedback>
            <View style={styles.modal}>
              <Text>{title}</Text>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  modal: {
    marginTop: 150,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'left',
    justifyContent: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: '90%',
  },
});

export default DetailsModal;