import React from 'react';
import { SafeAreaView, StatusBar, KeyboardAvoidingView, ScrollView, StyleSheet, Platform } from 'react-native';
import LoginForm from '../components/LoginForm';

export default function LoginScreen() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <SafeAreaView style={styles.safeAreaTop} />
      <SafeAreaView style={styles.safeAreaBottom}>
        <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <ScrollView contentContainerStyle={styles.flexGrow}>
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
  },
  safeAreaBottom: {
    flex: 1, 
    backgroundColor: 'black' 
  },
  flex: {
    flex: 1 
  },
  flexGrow: {
    flexGrow: 1 
  }
});
