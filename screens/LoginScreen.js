import React from 'react';
import { SafeAreaView, StatusBar, KeyboardAvoidingView, ScrollView, StyleSheet, Platform } from 'react-native';
import LoginForm from '../components/LoginForm';

export default function LoginScreen() {
  return (
    <>
      {/* StatusBar to control the status bar's appearance */}
      <StatusBar barStyle="light-content" backgroundColor="black" />

      {/* SafeAreaView for the top area, to ensure content is placed within the safe area boundaries */}
      <SafeAreaView style={styles.safeAreaTop} />

      {/* Main SafeAreaView that contains the content */}
      <SafeAreaView style={styles.safeAreaBottom}>
        {/* KeyboardAvoidingView to ensure the keyboard does not block the inputs on the screen */}
        <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === "ios" ? "padding" : "height"}>
          {/* ScrollView to enable scrolling, especially useful when the keyboard is open or on small screens */}
          <ScrollView contentContainerStyle={styles.flexGrow}>
            {/* LoginForm component that contains the login fields and buttons */}
            <LoginForm />
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeAreaTop: {
    backgroundColor: 'black', 
    flex: 0, 
    height: 50, 
  },
  safeAreaBottom: {
    flex: 1, 
    backgroundColor: 'black',
    height: 50,
  },
  flex: {
    flex: 1 
  },
  flexGrow: {
    flexGrow: 1 
  }
});