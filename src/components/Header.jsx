import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../Global/colors';
const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,        
    height: 80,           
    backgroundColor: colors.green3,  
    justifyContent: 'center', 
    alignItems: 'center', 
  },
});