import { StyleSheet, View } from 'react-native'
import Header from '../components/Header'
import Categoria from '../components/Categoria'



const Home = ({setCategorySelected}) => {
  
  return (
        <>
            <Header title='Categorias' />
            <Categoria setCategorySelected={setCategorySelected}/>
        </>
  )
}

export default Home

const styles = StyleSheet.create({
  

})