import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { colors } from "../Global/colors";

const ProductoItem = ({ item }) => {
 

  return (
    <View style={styles.container}>
       <Image
            style={styles.image}
            resizeMode='cover'
            source={{uri:item.thumbnail}}
        />
      <Text style={styles.text}>{item.nombre}</Text>
    </View>
  );
};

export default ProductoItem;

const styles = StyleSheet.create({
  container: {
    width: "80%",
    backgroundColor: colors.green3,
    marginHorizontal: "10%",
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "start",
    gap: 30,
  },
  image: {
    width: 50,
    height: 50,
  },
});
