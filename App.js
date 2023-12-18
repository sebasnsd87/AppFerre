import { StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import Home from './src/Screen/Home.jsx'
import ItemListCategories from './src/Screen/ItemListCategories.jsx'
import { useState } from 'react'
import { useFonts } from "expo-font"
import { colors } from './src/Global/colors.js'
import ItemDetails from './src/Screen/ItemDetails.jsx'
import Footer from './src/components/Footer.jsx'

const  App = () => {
  const [categorySelected,setCategorySelected] = useState("")
  const [productDetailId,setProductDetailId] = useState(0)
  
  const [fontLoaded] = useFonts({
    Josefin:require("./assets/Fonts/JosefinSans-Bold.ttf"),
    Lobster:require("./assets/Fonts/Lobster-Regular.ttf"),
    PlayfairDisplay:require("./assets/Fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf")
  })

  if(!fontLoaded) return null

  
  return (
    <>
      <StatusBar
        backgroundColor={colors.green1}
      />
      <SafeAreaView style={styles.container}>
        {categorySelected ?
            productDetailId != 0 ? 
                <ItemDetails productDetailId={productDetailId} setProductDetailId={setProductDetailId} />
              :
                <ItemListCategories 
                    category = {categorySelected} 
                    setCategorySelected={setCategorySelected}
                    setProductDetailId={setProductDetailId}
                  />
              
          :
          <Home setCategorySelected={setCategorySelected}/>
        }

        <Footer/>
      
      </SafeAreaView>
    </>
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

