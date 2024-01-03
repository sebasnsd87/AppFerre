import { colors } from '../Global/colors'
import CardShadow from '../Wrappers/CardShadow'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { setProductsFilteredByCategory} from "../Features/shopSlice"


const CategoriaItem = ({categorias ,navigation}) => {
  
  const dispatch = useDispatch()

  return (
    <Pressable onPress={()=>{ 
        dispatch(setProductsFilteredByCategory(categorias))
        navigation.navigate("Category",{categorias})
      }}>
      <CardShadow style={styles.container}>
        <Text style={styles.text}>{categorias}</Text>
      </CardShadow>
    </Pressable>
  )
}

export default CategoriaItem

const styles = StyleSheet.create({
    container:{
        width:"80%",
        marginHorizontal:"10%",
        backgroundColor:colors.green2,
        margin:10,
        padding:10,
        justifyContent:"center",
        alignItems:"center"
    }
})