import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import BookingScreen from './src/screens/BookingScreen';
import WorkersScreen from './src/screens/WorkersScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import ClientViewScreen from './src/screens/ClientViewScreen';
import AdminViewScreen from './src/screens/AdminViewScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Booking" component={BookingScreen} />
        <Stack.Screen name="Workers" component={WorkersScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="ClientView" component={ClientViewScreen} />
        <Stack.Screen name="AdminView" component={AdminViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
