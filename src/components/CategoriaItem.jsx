import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../Global/colors'
import CardShadow from '../Wrappers/CardShadow'

const CategoriaItem = ({category ,navigation}) => {
  return (
    <Pressable onPress={()=>
      navigation.navigate("ItemListCategories", { category } )}>
      <CardShadow style={styles.container}>
        <Text style={styles.text}>{category}</Text>
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