import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../Global/colors' 
    
    const GoBack = ({ onGoBack }) => {
        return (
          <View style={styles.back} >
            <Pressable style={styles.goBack} title='Go back' onPress={onGoBack}>
              <Text style={styles.text} >Volver</Text>
            </Pressable>
          </View>
        )
      }
      

export default GoBack

const styles = StyleSheet.create({
    back: {
        width:"100%"
    },
    goBack: {
      width: "100%",
      backgroundColor: colors.green3,
      padding:10
    },
    text:{
        fontFamily: "Lobster",
        fontSize: 15
    }
  })