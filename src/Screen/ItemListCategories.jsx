import { FlatList, StyleSheet, Pressable, Text } from 'react-native'
import Header from '../components/Header'
import Search from '../components/Search'
import allProducts from "../Data/productos.json"
import ProductoItem from "../components/ProductoItem"
import { useEffect, useState } from 'react'
import { colors } from '../Global/colors'
import GoBack from '../components/GoBack'


const ItemListCategories = ({category, setCategorySelected, setProductDetailId}) => {

  const [keyword,setKeyword] = useState("")
  const [products,setProducts] = useState(allProducts)

  useEffect(()=>{

    if(category){
      const productsCategory = allProducts.filter(product => product.category === category)
      const productsFiltered = productsCategory.filter(product => product.title.includes(keyword))
      setProducts(productsFiltered)
    }else{
      const productsFiltered = allProducts.filter(product => product.title.includes(keyword))
      setProducts(productsFiltered)
    }


  },[category, keyword])

  return (
    <>
      <Header/>
      <Search setKeyword={setKeyword}/>
      <GoBack onGoBack={() => setCategorySelected("")} />
      <FlatList
        style={styles.container}
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item})=> <ProductoItem item={item} setProductDetailId={setProductDetailId}/>}
      />
    </>
  )
}


export default ItemListCategories

const styles = StyleSheet.create({
 container:{
  width:"100%",
  backgroundColor:colors.green2
 },
 text:{
  fontFamily:"Josefin"
 }
})