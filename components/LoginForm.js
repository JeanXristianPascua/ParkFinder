import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);
  const navigation = useNavigation();

  const handleLogin = () => {
    if (username === '' || password === '') {
      Alert.alert('Error', 'Please enter both username and password');
      return;
    }

    if (username === 'user' && password === 'password') { 
      navigation.navigate('Home');
    } else {
      Alert.alert('Error', 'Invalid username or password');
    }
  };

  const handleCreateAccount = () => {
  };

  const handleForgotPassword = () => {
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>
      <Text style={styles.text}>USERNAME:</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Enter username"
        accessible
        accessibilityLabel="Username Input"
      />
      <Text style={styles.text}>PASSWORD:</Text>
      <View>
        <TextInput
          style={styles.input}
          secureTextEntry={passwordVisibility}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter password"
          accessible
          accessibilityLabel="Password Input"
        />
        <TouchableOpacity
          style={styles.visibilityBtn}
          onPress={() => setPasswordVisibility(!passwordVisibility)}
        >
          <Text>{passwordVisibility ? 'Show' : 'Hide'}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleForgotPassword} style={styles.textContainer}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => setRememberMe(!rememberMe)}
        >
          {rememberMe ? <View style={styles.checkedBox} /> : <View style={styles.uncheckedBox} />}
        </TouchableOpacity>
        <Text style={styles.checkboxText}>Remember Me</Text>
      </View>
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCreateAccount} style={styles.button}>
        <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff', 
        marginVertical: 40, 
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
    visibilityBtn: {
        position: 'absolute',
        right: 10,
        height: 45,
        width: 45,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
