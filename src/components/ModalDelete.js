import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ModalDelete = ({ product, visible, onModal, onDelete }) => {
  const handleDelete = () => {
    onDelete();
    onModal(false);
  };

  const closeModal = () => {
    onModal(false);
  };

  return (
    <Modal visible={visible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>¿Está seguro que quiere borrar?</Text>
          <Text style={styles.modalText}>{product.title}</Text>
          <TouchableOpacity style={styles.boton} onPress={handleDelete}>
            <Text style={styles.botonText}>Borrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton} onPress={closeModal}>
            <Text style={styles.botonText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    width: "80%",
    borderWidth: 2,
    borderColor: "black",
    padding: 10,
    gap: 10,
  },
  modalText: {
    textAlign: "center",
  },
  boton: {
    backgroundColor: "yellow",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "center",
  },
  botonText: {
    textAlign: "center",
  },
});

export default ModalDelete;
