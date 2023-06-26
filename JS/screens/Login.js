// Render the Login screen
// Include a logo or app name at the top
// Display input fields for username/email and password
// Add appropriate labels for the input fields
// Style the input fields to have appropriate width and spacing

// Add a password visibility toggle button/icon
// Implement functionality to toggle password visibility when pressed

// Include a "Forgot Password?" link or button
// Link it to the password recovery/reset screen or process

// Add a "Login" button
// Implement functionality to trigger the login action when pressed
// Perform necessary authentication checks and validations

// Include a "Sign Up" link or button
// Link it to the sign-up or registration screen

// Add social login options (e.g., Google, Facebook)
// Implement integration with respective social media platforms
// use the GoogleSignInButton component

// Display error messages or notifications for login-related errors
// Validate user input and show appropriate error messages

// Apply appropriate styling, including colors, fonts, and layout
// Ensure the screen is responsive and supports different device sizes


import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
//import { GoogleSignin } from '@react-native-google-signin/google-signin';

// Import components
import CustomHeader from '../components/CustomHeader';
import GoogleSignInButton from '../components/GoogleSignInButton';


const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <CustomHeader />
            <View style={styles.content}>
                <image source={require('../assets/icon.png')} />
                <Text style={styles.title}>TeachTrack</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        onChangeText={(text) => setUsername(text)}
                        value={username}
                    />
                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            secureTextEntry={!passwordVisible}
                            onChangeText={(text) => setPassword(text)}
                            value={password}
                        />
                        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                            <MaterialCommunityIcons
                                name={passwordVisible ? 'eye-off' : 'eye'}
                                size={24}
                                color="black"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
                    <Text style={styles.link}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.link}>Sign Up</Text>
                </TouchableOpacity>
                // add google sign in button component here
                <GoogleSignInButton onPress={handleLogin}>
                    <Text style={styles.buttonText}>Sign in with Google</Text>
                </GoogleSignInButton>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 24,
        fontWeight: 'bold',
    },
    inputContainer: {
        flex: 1,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '100%',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    passwordContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2196F3',
        padding: 10,
        borderRadius: 5,
        width: '80%',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    link: {
        flex: 1,
        color: '#2196F3',
        fontSize: 16,
    },
});

export default LoginScreen;