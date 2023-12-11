import React, { useState, useEffect, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import Header from './layouts/Header';
import Footer from './layouts/Footer';

const Stack = createNativeStackNavigator();
export const AuthContext = createContext();

export default function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(null);

  useEffect(() => {
    const checkAuthStatus = async () => {
      const isLoggedIn = await new Promise(resolve => setTimeout(() => resolve(true), 1000));
      setIsUserLoggedIn(isLoggedIn);
    };

    checkAuthStatus();
  }, []);

  if (isUserLoggedIn === null) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={isUserLoggedIn ? "Home" : "Login"}>
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={({ navigation }) => ({
              header: () => <Header navigation={navigation} />,
            })} 
          />
          <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{ headerShown: false }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
