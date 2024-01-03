import { FlatList, StyleSheet} from 'react-native'
import CategoriaItem from './CategoriaItem'
import { useSelector} from 'react-redux'
import {colors} from "../Global/colors"

const Categoria = ({navigation,route}) => {
  const categorias = useSelector((state) => state.shop.value.categorias)

  return (
    <FlatList
        style={styles.container}
        data={categorias}
        keyExtractor={item => item}
        renderItem={({item}) => <CategoriaItem  categorias={item} navigation={navigation} route={route}/>}
    />
  )
}

export default Categoria

const styles = StyleSheet.create({
    container:{
        width:"100%",
        backgroundColor: colors.green3
    }
})