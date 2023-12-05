import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Checkbox from './ListProduct/Checkbox';
import Swal from 'sweetalert';

const AddProduct = ({ valueTitle, valuePrice, onChangeTitle, onChangePrice, addProduct }) => {
  const [completado, setCompletado] = useState(false);

  const handleAddProduct = () => {
    if (completado) {
      addProduct();
    } else {
      Swal('Aviso', 'Completa todos los campos antes de agregar el producto');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={valueTitle}
        onChangeText={(t) => onChangeTitle(t)}
      />
      <TextInput
        style={styles.input}
        placeholder="Precio"
        value={valuePrice}
        onChangeText={(t) => onChangePrice(t)}
      />
      <Checkbox
        title='Completo'
        checked={completado}
        onPress={() => setCompletado(!completado)}
      />
      <Button title="Agregar" onPress={handleAddProduct} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    marginTop: 20,
  },
  input: {
    borderWidth: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: 150,
    marginBottom: 10,
  },
});

export default AddProduct;
