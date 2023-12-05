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
        <ScrollView contentContainerStyle={styles.scrollView}>
          <LoginForm />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#000000', // Updated for consistency
  },
  keyboardView: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20, // Keep your horizontal padding
    borderTopWidth: 1, // Set top border width
    borderBottomWidth: 1, // Set bottom border width
    borderColor: '#000000', // Replace with the color you want for the border
  },
});