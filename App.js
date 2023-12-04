import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Image, Text, TouchableOpacity, SafeAreaView, StatusBar, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false); // Added state for Remember Me checkbox

  const handleLogin = () => {
    // Implement login logic
    console.log('Username:', username, 'Password:', password, 'Remember Me:', rememberMe);
  };

  return (
    <SafeAreaView style={styles.outerContainer}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <KeyboardAvoidingView 
        style={{ flex: 1 }} 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
          <Image source={require('./assets/logo.png')} style={styles.logo} />
          </View>
          <Text style={styles.text}>USERNAME:</Text>
          <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          />
          <Text style={styles.text}>PASSWORD:</Text>
          <TextInput
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          />
            <View style={styles.textContainer}>
            <TouchableOpacity>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.checkboxContainer}>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={() => setRememberMe(!rememberMe)}
            >
              {rememberMe ? (
                <View style={styles.checkedBox} />
              ) : (
                <View style={styles.uncheckedBox} />
              )}
            </TouchableOpacity>
            <Text style={styles.checkboxText}>Remember Me</Text>
          </View>
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    height: 200,
    backgroundColor: 'yellow', // Border color of the screen
   },
   container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff', // Background color of the screen
    marginVertical: 20, // This creates the top and bottom borders
   },
   logoContainer: {
     marginBottom: 30,
   },
   logo: {
     width: 150, // Set your desired logo width
     height: 150, // Set your desired logo height
     resizeMode: 'contain',
   },
   input: {
     width: 264,
     height: 45,
     padding: 15,
     marginBottom: 10,
     borderWidth: 1,
     borderColor: '#000', // Set your desired border color
     borderRadius: 50,
   },
   button: {
     backgroundColor: '#ffec41', // Set your desired button color
     padding: 15,
     width: 199,
     alignItems: 'center',
     marginBottom: 10,
     borderRadius: 50,
     height: 50,
   },
   buttonText: {
     color: '#000', // Set your desired button text color
     fontWeight: 'bold',
   },
   textContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Center the text horizontally
    width: '100%',
    marginBottom: 10,
   },
   text: {
     color: '#000', // Set your desired text color
     alignContent: 'center',
     fontWeight: 'bold',
     marginBottom: 10,
   },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedBox: {
    width: 14,
    height: 14,
    backgroundColor: '#ffec41',
    borderRadius: 2,
  },
  uncheckedBox: {
    width: 14,
    height: 14,
  },
  checkboxText: {
    color: '#000',
  },
  forgotPasswordText: {
    color: '#000', // Set your desired text color
    alignContent: 'center',
  },
});
