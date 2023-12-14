import { StyleSheet } from 'react-native'
import Header from '../components/Header'
import Categories from '../Components/Categories'

const Home = ({setCategorySelected}) => {
  
  return (
        <>
            <Header title='Categories' />
            <Categories setCategorySelected={setCategorySelected}/>
        </>
  )
}

export default Home

const styles = StyleSheet.create({

})