import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import Header from '../components/Header'
import Search from '../components/Search'
import allProducts from "../Data/productos.json"
import ProductoItem from '../components/ProductoItem'
import { useEffect, useState } from 'react'
import { colors } from '../Global/colors'


const ItemListCategories = ({categoria}) => {

  const [keyword,setKeyword] = useState("")
  const [products,setProducts] = useState(allProducts)

  useEffect(()=>{

    if(categoria){
      const productsCategory = allProducts.filter(product => product.categoria === categoria)
      const productsFiltered = productsCategory.filter(product => product.nombre.includes(keyword))
      setProducts(productsFiltered)
    }else{
      const productsFiltered = allProducts.filter(product => product.nombre.includes(keyword))
      setProducts(productsFiltered)
    }


  },[keyword])

  return (
    <>
      <Header/>
      <Search setKeyword={setKeyword}/>
      <FlatList
        style={styles.container}
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item})=> <ProductoItem item={item}/>}
      />
    </>
  )
}

export default ItemListCategories

const styles = StyleSheet.create({
 container:{
  width:"100%",
  backgroundColor:colors.green2
 }
})