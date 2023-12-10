import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

export default function MainLayout({ children }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', 
  },
  content: {
    flex: 1,
    padding: 10, 
  },
});
