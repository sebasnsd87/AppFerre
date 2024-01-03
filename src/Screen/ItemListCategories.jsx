import { FlatList, StyleSheet} from 'react-native'
import Search from '../components/Search'
import ProductoItem from '../components/ProductoItem'
import { useEffect, useState } from 'react'
import { colors } from '../Global/colors'
import { useSelector } from 'react-redux'

const ItemListCategories = ({navigation, route}) => {

  const productsFilteredByCategory = useSelector(state => state.shop.value.productsFilteredByCategory)
  const [keyword,setKeyword] = useState("")
  const [products,setProducts] = useState(productsFilteredByCategory)

  useEffect(()=>{

      const productsFiltered = productsFilteredByCategory.filter(product => product.title.includes(keyword))
      setProducts( productsFiltered)


  },[keyword,productsFilteredByCategory])


  return (
    <>
      <Search setKeyword={setKeyword}/>
      <FlatList
        style={styles.container}
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item})=> <ProductoItem item={item} navigation={navigation} route={route} />}
      />
    </>
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