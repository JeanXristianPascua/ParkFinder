import React from 'react';
import { SafeAreaView, StatusBar, KeyboardAvoidingView, Platform, ScrollView, StyleSheet } from 'react-native';
import LoginForm from '../components/LoginForm';

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.outerContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <KeyboardAvoidingView style={styles.keyboardView}>
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
});
