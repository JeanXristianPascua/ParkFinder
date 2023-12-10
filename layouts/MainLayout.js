import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from './Header';
import Footer from './Footer';

export default function MainLayout({ children, style }) {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView>
      <Header /> 
      <View>
        {children}
      </View>
      <Footer />
    </SafeAreaView>
  );
};

