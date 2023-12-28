import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import allProducts from "../Data/productos.json";
import { colors } from '../Global/colors';

const ItemDetails = ({route}) => {
  const { id } = route.params;
  const [product, setProduct] = useState({});

  useEffect(() => {
    const productFind = allProducts.find((product) => product.id === id);
    setProduct(productFind);
  }, [id]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: product.thumbnail }}
        resizeMode='cover'
      />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>{`$${product.price}`}</Text>
    </View>
  );
};

export default ItemDetails


const styles = StyleSheet.create({
  container:{
      width:"100%",
      flex:1,
      justifyContent:"start",
      alignItems:"center",
  },
  content:{
    width:"100%"
  },
  contentLandscape:{
    flexDirection:"row",
    alignItems:"center",
    gap:15,
    marginVertical:15
  },
  image:{
    width:"100%",
    height:300
  },
  imageLandscape:{
    width:200,
    height:200
  },
   containerTextLandscape:{
    width:"30%",
    flexDirection:"column"
   },
   containerText:{
    gap:25,
    paddingHorizontal:5,
    paddingVertical:25
   },
   containerPriceLandscape:{
    width:"30%",
    flexDirection:"column"
   },
   containerPrice:{
      width:"100%",
      flexDirection:"row",
      justifyContent:"space-around",
      alignItems:"center",
      marginVertical:10
   },
   title:{
    fontSize:20,
    fontFamily:"Josefin"
   },
   price:{
    fontSize:30
   },
   buyNow:{
    backgroundColor:colors.green1,
    paddingVertical:5,
    paddingHorizontal:10,
    borderRadius:5
   },
   buyNowText:{
    color:"white"
   }
})