import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header'
import Ordenes from '../Screen/Ordenes'

const Stack = createNativeStackNavigator()

const OrdenStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='Orders'
        screenOptions={
            ({route})=>{
                return {
                    header : () => <Header title="Ordenes"/>
                }
            }
        }
    >
        <Stack.Screen name="Ordenes" component={Ordenes} />
    </Stack.Navigator>
  )
}

export default OrdenStack
