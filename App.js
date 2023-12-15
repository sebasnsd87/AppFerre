import { StyleSheet, View } from 'react-native'
import Home from './src/Screen/Home.jsx'
import ItemListCategories from './src/Screen/ItemListCategories.jsx'
import { useState } from 'react'
import { useFonts } from "expo-font"
import { colors } from './src/Global/colors.js'

const  App = () => {
  const [categorySelected,setCategorySelected] = useState("")
  
  const [fontLoaded] = useFonts({
    Josefin:require("./assets/Fonts/JosefinSans-Bold.ttf")
  })

  if(!fontLoaded) return null

  
  return (
    <View style={styles.container}>
      {categorySelected ?
        <ItemListCategories category = {categorySelected}/>
        :
        <Home setCategorySelected={setCategorySelected}/>
      }
     
    </View>
  )
}

export default App


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.green2,
    alignItems: 'center',
    justifyContent: 'start',
  },
})

