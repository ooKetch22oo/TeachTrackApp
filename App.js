import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import styles from './styles';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';


// Import your screens
import HomeScreen from './screens/HomeScreen';
import Dashboard from './screens/Dashboard';
import Class from './screens/Class';
import ClassScreen from './screens/Class';


// Import your components. Don't forget to add them to the navigator below!
//import CustomHeader from './components/CustomHeader';




// Create a stack navigator
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* Add more screens to the navigator as needed */}
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Class" component={ClassScreen} />
        
        

      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default App;
