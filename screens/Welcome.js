// write A welcome screen for the app.
// This will be the first screen that the user sees when they open the app.
// It should have a title and a short description of the app.
// It should also have a button that takes the user to the home screen.

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// Import components
import CustomHeader from '../components/CustomHeader';

const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
        <CustomHeader />
        <Text style={styles.title}>Welcome to TeachTrack!</Text>
        <Text style={styles.body}>This app is designed to help teachers keep track of their students' data.</Text>
        <Button
            title="Get Started"
            onPress={() => navigation.navigate('Home')}
        />
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
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default WelcomeScreen;
