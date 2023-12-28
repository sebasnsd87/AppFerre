import { FlatList, StyleSheet } from 'react-native'
import allOrders from "../Data/orders.json"
import OrdenItem from '../Components/OrdenItem'

const Ordenes = () => {
  return (
    <FlatList
        data={allOrders}
        keyExtractor={item => item.id}
        renderItem={({item}) => <OrdenItem order={item}/>}
    />
  )
}

export default Ordenes

const styles = StyleSheet.create({
    
})