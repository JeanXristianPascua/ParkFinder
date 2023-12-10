import React  from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Header({navigation}) {

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
         <View style={styles.emptySpace}></View> 
      <Image source={require('../assets/header.png')} style={styles.headerLogo} />
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: 'black', 
  },
  emptySpace: {
    width: 50,
  },
  logoutButtonText: {
    color: 'white', 
    fontSize: 16,
  }
});