import React  from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Header({ navigation }) {
  // Function to handle logout action
  const handleLogout = () => {
    navigation.navigate('Login'); // Navigate to the login screen
  };

  return (
    // Container for the header
    <View style={styles.container}>
      {/* Empty space on the left, can be used for additional elements if needed */}
      <View style={styles.emptySpace}></View> 

      {/* Image component for the header logo */}
      <Image source={require('../assets/header.png')} style={styles.headerLogo} />

      {/* TouchableOpacity for the logout button */}
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