import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

export default function MainLayout({ children }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {children}
      </View>
      {/* Add common components here, like a Footer or Navigation Bar */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Set a background color for the entire app
  },
  content: {
    flex: 1,
    padding: 10, // Provide some padding around each screen
  },
});
