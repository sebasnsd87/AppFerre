import { View, Text, FlatList, Pressable } from "react-native"
import categorias from "../Data/categorias.json"
import { colors } from "../Global/colors"



const Home = ({navigation}) => {
  
  return (
    <View style={styles.container}>
      <FlatList
        data={categorias}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Pressable
            style={styles.categoryItem}
            onPress={() => {
              navigation.navigate("ItemListCategories", { category: item });
            }}
          >
            <Text style={styles.categoryText}>{item}</Text>
          </Pressable>
        )}
      />
    </View>
  )
}
export default Home

const styles = {
  container: {
    backgroundColor: colors.green2,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    fontFamily: "Josefin",
    fontSize: 20
  },
  categoryText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
}