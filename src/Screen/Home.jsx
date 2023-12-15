import { StyleSheet, View } from 'react-native'
import Header from '../components/Header'
import Categoria from '../components/Categoria'
import { colors } from 'react-native-elements'


const Home = ({setCategorySelected}) => {
  
  return (
        <>
            <Header title='Categories' />
            <Categoria setCategorySelected={setCategorySelected}/>
        </>
  )
}

export default Home

const styles = StyleSheet.create({
  

})