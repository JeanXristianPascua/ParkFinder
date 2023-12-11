import React, { useState, useEffect, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import Header from './layouts/Header';

const Stack = createNativeStackNavigator();
export const AuthContext = createContext(); // Create a context for authentication

export default function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(null); // State to track the user's login status

  useEffect(() => {
    // Function to simulate checking the authentication status (e.g., checking a token)
    const checkAuthStatus = async () => {
      // Simulating an async operation (like fetching from an API)
      const isLoggedIn = await new Promise(resolve => setTimeout(() => resolve(true), 1000));
      setIsUserLoggedIn(isLoggedIn); // Update the login status
    };

    checkAuthStatus(); // Call the function on component mount
  }, []);

  // Show nothing while the authentication status is being checked
  if (isUserLoggedIn === null) {
    return null;
  }

  return (
    // Provide the authentication status and updater function to the entire app
    <AuthContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn }}>
      {/* NavigationContainer to manage the navigation tree */}
      <NavigationContainer>
        {/* Stack.Navigator to define the navigation stack */}
        <Stack.Navigator initialRouteName={isUserLoggedIn ? "Home" : "Login"}>
          {/* Home Screen with a custom Header component */}
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={({ navigation }) => ({
              header: () => <Header navigation={navigation} />, // Custom header for the Home screen
            })} 
          />
          {/* Login Screen without the default header */}
          <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{ headerShown: false }} // Hide the header for the Login screen
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}