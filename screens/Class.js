//Creat a Class Management Screen: Assist teachers in managing class-related tasks, such as student roster management, attendance tracking, and assignment management.

// Path: screens\Class.js


import React from 'react';
import { StyleSheet } from 'react-native';

// Import components
import CustomHeader from '../components/CustomHeader';

const ClassScreen = () => {
    return (
        <View style={styles.container}>
        <CustomHeader />
        <Text style={styles.title}>Class</Text>
        {/* Add your Class content here */}
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

export default ClassScreen;