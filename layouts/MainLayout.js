import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from './Header';

export default function MainLayout({ children, style }) {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={[styles.container, style]}>
      <Header /> 
      <View style={[styles.content, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
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
