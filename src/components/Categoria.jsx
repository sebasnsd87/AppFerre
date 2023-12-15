import { FlatList, StyleSheet, Text, View } from 'react-native'
import categorias from "../Data/categorias.json"
import CategoriaItem from "./CategoriaItem"
import { colors } from '../Global/colors'

const Categoria = ({setCategorySelected}) => {
  return (
    <FlatList
        style={styles.container}
        data={categorias}
        keyExtractor={item => item}
        renderItem={({item}) => <CategoriaItem setCategorySelected={setCategorySelected} category={item}/>}
    />
  )
}

export default Categoria  

const styles = StyleSheet.create({
    container:{
        width:"100%",
        backgroundColor:colors.green2,
    }
})