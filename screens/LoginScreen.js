import React from 'react';
import { SafeAreaView, StatusBar, KeyboardAvoidingView, Platform, ScrollView, StyleSheet } from 'react-native';
import LoginForm from '../components/LoginForm';

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.outerContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <KeyboardAvoidingView 
        style={styles.keyboardView}
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
      >
        <ScrollView>
          <LoginForm />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#000000', 
    height: 80,
  },
  keyboardView: {
    flex: 1,
  },
});
