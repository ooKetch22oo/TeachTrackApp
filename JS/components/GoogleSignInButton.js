// create a google signin button component
 
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
//import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

// Initialize Google Sign-In
GoogleSignin.configure({
  // Add necessary configurations, such as webClientId and scopes
});

const GoogleSignInButton = () => {

  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // Handle successful sign-in
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // Handle user cancelation
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // Handle sign-in in progress
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // Handle Play services not available
      } else {
        // Handle other errors
      }
    }
  };

  return (
    <TouchableOpacity onPress={handleGoogleSignIn}>
      <View>
        <Text>Sign in with Google</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoogleSignInButton;
