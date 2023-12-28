import { StyleSheet,StatusBar } from 'react-native'
import { useFonts } from "expo-font"
import { colors } from './src/Global/colors'
import Navegacion from './src/Navigation/Navegacion'
import { store } from './src/app/Store'
import { Provider } from 'react-redux'


const App = () => {

  const [fontLoaded] = useFonts({
    Josefin:require("./assets/Fonts/JosefinSans-Bold.ttf"),
    PlayfairDisplay:require("./assets/Fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf"),
    Lobster:require("./assets/Fonts/Lobster-Regular.ttf"),
    RobotoMono:require("./assets/Fonts/RobotoMono-VariableFont_wght.ttf")
  })

  if(!fontLoaded) return null

  
  return (
    <>
      <StatusBar backgroundColor={colors.green1}/>
      <Provider store={store}>
        <Navegacion/>
      </Provider>
      <Footer/>
    </>
  )
}

export default App


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
  },
})


