import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import MapComponent from '../components/MapComponent';
import Footer from '../layouts/Footer';

export default function HomeScreen() {
  const [location, setLocation] = useState(null); // State for storing user's location
  const [errorMsg, setErrorMsg] = useState(null); // State for storing any error message

  useEffect(() => {
    // Async function to request location permissions and fetch current location
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied'); // Set error message if permission is denied
        return;
      }

      let location = await Location.getCurrentPositionAsync({}); // Get current location
      setLocation(location); // Update location state
    })();
  }, []);

  // Determine the text to display based on location/error status
  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg; // Display error message if there's an error
  } else if (location) {
    text = JSON.stringify(location); // Display location data if available
  }

  return (
    // Container for the screen
    <View style={styles.container}>
      {location ? (
        <MapComponent location={location} /> // Render MapComponent if location is available
      ) : (
        <Text style={styles.text}>{text}</Text> // Show text while waiting for location or in case of error
      )}
      <Footer /> // Footer component for navigation
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});


