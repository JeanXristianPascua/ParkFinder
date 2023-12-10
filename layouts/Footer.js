import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => alert('Home!')}>
        <Ionicons name="md-home" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('Search!')}>
        <Ionicons name="md-search" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('Notifications!')}>
        <Ionicons name="md-notifications" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('Profile!')}>
        <Ionicons name="md-person" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
});

