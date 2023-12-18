import { StyleSheet, View, Pressable, Linking } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../Global/colors';

const Footer = () => {
    const handleFacebookPress = () => {
        Linking.openURL('https://es-la.facebook.com/');
      }
    
      const handleWhatsAppPress = () => {
        Linking.openURL('https://services.tochat.be/es/api/business/send/0eb27634-f70f-4b4a-bde5-ad7ed90abb95');
      }

  return (
    <View style={styles.footer}>
      <Pressable onPress={handleWhatsAppPress}>
        <FontAwesome5 name="whatsapp" size={30} color="green" />
      </Pressable>
      <Pressable onPress={handleFacebookPress}>
        <FontAwesome5 name="facebook" size={30} color="blue" />
      </Pressable>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
  footer: {
    width:"100%",
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.green3
  }
})


