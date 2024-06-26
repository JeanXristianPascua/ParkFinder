import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, ActivityIndicator, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { getDistance } from 'geolib';

export default function MapComponent() {
  // State variables
  const [location, setLocation] = useState(null); // Store the current location
  const [errorMsg, setErrorMsg] = useState(null); // Store any error messages
  const [subscription, setSubscription] = useState(null); // Store the subscription to location updates
  const [nearbyParkingLots, setNearbyParkingLots] = useState([]); // Store nearby parking lots


  useEffect(() => {
     // Async function to request location permissions and start watching position
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      const sub = await Location.watchPositionAsync({
        accuracy: Location.Accuracy.High,
        distanceInterval: 10,
      }, (loc) => {
        setLocation(loc); // Update the location state variable
        fetchParkingLots(loc.coords.latitude, loc.coords.longitude); // Fetch parking lots from the Calgary Open Data API
      });

      setSubscription(sub); // Store the subscription to location updates
    })();

    // Cleanup function to remove the subscription to location updates
    return () => {
      subscription && subscription.remove();
    };
  }, []);

  // Function to fetch parking lots from the Calgary Open Data API
  const fetchParkingLots = async (latitude, longitude) => {
    const url = 'https://data.calgary.ca/resource/rhkg-vwwp.json';
    try {
      const response = await fetch(url);
      const parkingLots = await response.json();
      const nearbyLots = findNearestParkingLots(parkingLots, latitude, longitude); 
      setNearbyParkingLots(nearbyLots.slice(0, 3)); // Update state with nearby parking lots (only the 3 closest)
    } catch (error) {
      console.error(error);
    }
  };

  // Parse the 'line' field to extract latitude and longitude values
  const parseLineField = (lineField) => {
  if (!lineField || !lineField.coordinates || !Array.isArray(lineField.coordinates)) {
    return { latitude: null, longitude: null };
  }
  
  const firstLineString = lineField.coordinates[0];
  if (!firstLineString || !Array.isArray(firstLineString) || firstLineString.length === 0) {
    return { latitude: null, longitude: null };
  }

  const [longitude, latitude] = firstLineString[0]; 
  return { latitude, longitude };
  };

    // Function to find the nearest parking lots to the user's current location
  const findNearestParkingLots = (parkingLots, userLat, userLong) => {
    return parkingLots.map(lot => {
      const { latitude, longitude } = parseLineField(lot.line);

      if (latitude == null || longitude == null) {
        return null;
      }

      return {
        ...lot,
        latitude,
        longitude,
        distance: getDistance(
          { latitude: userLat, longitude: userLong },
          { latitude, longitude }
        )
      };
    }).filter(lot => lot !== null)
      .sort((a, b) => a.distance - b.distance);
  };

    // Render error message if there's an error or no location
  if (errorMsg) {
    return <View style={styles.container}><Text>{errorMsg}</Text></View>;
  }

  // Render loading indicator while waiting for location to be fetched
  if (!location) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
        <Text>Loading map...</Text>
      </View>
    );
  }

    // Main render function for the component
  return (
    <View style={styles.container}>
      {/* MapView to display the map and markers */}
      <MapView
        style={styles.map}
        region={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        showsUserLocation={true}
        followUserLocation={true}
      >
        {/* Markers for the nearby parking lots */}
        {nearbyParkingLots.map((lot, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: lot.latitude,
              longitude: lot.longitude,
            }}
            title={lot.address_desc || "Parking Lot"}
            description={`Distance: ${lot.distance} meters`}
          />
        ))}
      </MapView>

      {/* ScrollView for parking lots information */}
      <View style={styles.parkingListContainer}>
        <ScrollView>
          {nearbyParkingLots.map((lot, index) => (
            <View key={index} style={styles.parkingItem}>
              <Text style={styles.parkingTitle}>{lot.address_desc || "Parking Lot"}</Text>
              <Text style={styles.parkingDistance}>{`Distance: ${lot.distance} meters`}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  parkingListContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    maxHeight: '100%',
  },
  parkingItem: {
    backgroundColor: '#f7f7f7',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
  },
  parkingTitle: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  parkingDistance: {
    fontSize: 14,
    color: '#666',
  },
});