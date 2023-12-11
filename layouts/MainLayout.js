import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from './Header';
import Footer from './Footer';

export default function MainLayout({ children, style }) {
  // Get the safe area insets (top, bottom, left, right)
  const insets = useSafeAreaInsets();

  return (
    // SafeAreaView to handle the notches and status bar
    <SafeAreaView style={{flex: 1}}>
      {/* Header component */}
      <Header />

      {/* Main content area where children components will be rendered */}
      <View style={{ flex: 1, ...style }}>
        {children}
      </View>

      {/* Footer component */}
      <Footer />
    </SafeAreaView>
  );
};