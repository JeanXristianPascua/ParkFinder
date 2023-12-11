import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Alert,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


// LoginForm component definition
export default function LoginForm() {
  // State variables to manage user input and form state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);
  const navigation = useNavigation();

  // Function to handle login action
  const handleLogin = () => {
    // Validation to ensure username and password are entered
    if (username === '' || password === '') {
      Alert.alert('Error', 'Please enter both username and password');
      return;
    }
    // Dummy authentication logic for demonstration
    if (username === 'user' && password === 'password') {
      // Navigate to Home screen if credentials are correct
      navigation.navigate('Home');
    } else {
      // Show error alert if credentials are incorrect
      Alert.alert('Error', 'Invalid username or password');
    }
  };

  // Render function to display UI components
  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          {/* Logo container */}
          <View style={styles.logoContainer}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
          </View>
          {/* Username input field */}
          <Text style={styles.text}>USERNAME:</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            placeholder="Enter username"
            accessible
            accessibilityLabel="Username Input"
          />
          {/* Password input field */}
          <Text style={styles.text}>PASSWORD:</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              secureTextEntry={passwordVisibility}
              value={password}
              onChangeText={setPassword}
              placeholder="Enter password"
              accessible
              accessibilityLabel="Password Input"
            />
          </View>
          {/* Forgot Password link */}
          <TouchableOpacity style={styles.textContainer}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
          {/* Remember Me checkbox */}
          <View style={styles.checkboxContainer}>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={() => setRememberMe(!rememberMe)}
            >
              {rememberMe ? <View style={styles.checkedBox} /> : <View style={styles.uncheckedBox} />}
            </TouchableOpacity>
            <Text style={styles.checkboxText}>Remember Me</Text>
          </View>
          {/* Login button */}
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          {/* Create Account button */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: 'black',
    },
    container: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#fff',
    },
    logoContainer: {
        marginBottom: 30,
    },
    logo: {
        width: 150, 
        height: 150,
        resizeMode: 'contain',
    },
    input: {
        width: 264,
        height: 45,
        padding: 15,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#000', 
        borderRadius: 50,
    },
    passwordContainer: {
      width: '100%',
      alignItems: 'center',
    },
    button: {
        backgroundColor: '#ffec41', 
        padding: 15,
        width: 199,
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 50,
        height: 50,
    },
    buttonText: {
        color: '#000', 
        fontWeight: 'bold',
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'center', 
        width: '100%',
        marginBottom: 10,
    },
    text: {
        color: '#000', 
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
        color: '#000',
        alignContent: 'center',
    },
});
