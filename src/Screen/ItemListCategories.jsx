import  { useEffect, useState } from 'react'
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native'
import allProducts from '../Data/productos.json'
import { colors } from '../Global/colors'

const ItemListCategories = ({navigation, route}) => {



  const { category } = route.params
  const [products, setProducts] = useState([])

  useEffect(() => {
    const productsFilted = allProducts.filter((product) => product.category === category);
    setProducts(productsFilted);
  }, [category])

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={styles.productItem}
            onPress={() => {
              navigation.navigate('ItemDetails', { id: item.id });
            }}
          >
            <Text style={styles.productTitle}>{item.title}</Text>
          </Pressable>
        )}
      />
    </View>
  )
}


export default ItemListCategories

const styles = StyleSheet.create({
 container:{
  width:"100%",
  height:"100%",
  padding: 20,
  backgroundColor:colors.green2
 },
 productTitle:{
  fontFamily:"RobotoMono",
  fontSize:17
 }
})