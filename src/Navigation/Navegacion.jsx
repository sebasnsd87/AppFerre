import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ShopStack from './ShopStack'
import CartStack from "./CartStack"
import { colors } from '../Global/colors'
import OrdenStack from './OrdenStack'
import TabIcon from '../components/TabIcon'

const Tab = createBottomTabNavigator()


const Navegacion = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown:false,
            tabBarShowLabel:false,
            tabBarStyle: styles.tabBar

          }}
        >
          <Tab.Screen
             name="ShopStack"
             component={ShopStack}
             options={{
              tabBarIcon:({focused}) => <TabIcon icon="shop" label="Productos" focused={focused}/>
             }}
          />
          <Tab.Screen 
            name="CartStack" 
            component={CartStack}
            options={{
              tabBarIcon:({focused}) =>  <TabIcon icon="shopping-cart" label="Carrito" focused={focused}/> 
             }}
             />
             <Tab.Screen 
            name="OrdenStack" 
            component={OrdenStack}
            options={{
              tabBarIcon:({focused}) => <TabIcon icon="list" label="Ordenes" focused={focused}/> 
             }}
             />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navegacion

const styles = StyleSheet.create({
    tabBar:{
      backgroundColor:colors.green3,
      elevation:4,
      position:"absolute",
      bottom:25,
      left:20,
      right:20,
      borderRadius:15,
      height:90


    }
})