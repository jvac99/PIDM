import React from "react";
import { Modal, View } from "react-native";
import { styles } from "./styles";

const MyModal = ({ child, modalVisible, onRequestClose }) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={onRequestClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>{child}</View>
        </View>
      </Modal>
    </View>
  );
};

export default MyModal;
