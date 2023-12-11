import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Footer() {
  return (
    // Container for the footer
    <View style={styles.footer}>
      {/* Touchable icon for Home */}
      <TouchableOpacity onPress={() => alert('Home!')}>
        <Ionicons name="md-home" size={24} color="yellow" />
      </TouchableOpacity>

      {/* Touchable icon for Bookmark */}
      <TouchableOpacity onPress={() => alert('Bookmark!')}>
        <Ionicons name="md-bookmark" size={24} color="yellow" />
      </TouchableOpacity>

      {/* Touchable icon for Location */}
      <TouchableOpacity onPress={() => alert('Location!')}>
        <Ionicons name="md-location" size={24} color="yellow" />
      </TouchableOpacity>

      {/* Touchable icon for Notifications */}
      <TouchableOpacity onPress={() => alert('Notifications!')}>
        <Ionicons name="md-notifications" size={24} color="yellow" />
      </TouchableOpacity>

      {/* Touchable icon for Car */}
      <TouchableOpacity onPress={() => alert('Car!')}>
        <Ionicons name="md-car" size={24} color="yellow" />
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
    backgroundColor: 'black',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    width: '100%',
  },
});

