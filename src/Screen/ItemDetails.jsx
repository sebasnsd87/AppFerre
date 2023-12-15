import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ItemDetails = () => {
  return (
    <View style={styles.container}>
      <Text>ItemDetail</Text>
    </View>
  )
}

export default ItemDetails

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})