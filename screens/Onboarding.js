// build an onboarding screen
// use the Onboarding component from react-native-onboarding-swiper
// highlight the features of the app
// the features should include: 
// AI-Powered Analysis: Harness the power of artificial intelligence to analyze student data, identify positive and negative trends in grades, and provide personalized suggestions to further student education.
// Customizable Data Collection: Allow teachers to collect and customize various types of data, including grades, behavior observations, physical projects, and comprehension notes, to capture a comprehensive view of student performance.
// Data Visualization: Present intuitive and visually appealing charts, graphs, and summary statistics to help teachers easily understand and interpret student data, enabling them to identify patterns and make informed decisions.
// Teacher Assistance: Act as a virtual teacher's assistant by offering helpful tools and features for efficient class management, such as student roster management, attendance tracking, and assignment management.
// Collaboration and Sharing: Enable seamless collaboration and sharing of student information with other teachers and relevant stakeholders, promoting effective teamwork and ensuring a holistic understanding of student progress. */
// add a button to the onboarding screen that navigates to the login screen

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Import components
import CustomHeader from '../components/CustomHeader';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
        <CustomHeader
            title="Welcome to TeachTrack!!"
            navigation={navigation}
        />
        <Onboarding
            pages={[

            {
                backgroundColor: '#fff',
                image: <Image source={require('../assets/teachtrack.png')} />,
                title: 'Welcome to TeachTrack!',
                subtitle: 'We empower teachers with data-driven insights and AI-powered analysis to enhance student success. Easily collect customizable data, visualize it in engaging charts, and discover trends in student performance.',
            },
            {
                backgroundColor: '#fff',
                image: <Image source={require('../assets/ai.png')} />,
                title: 'AI-Powered Analysis',
                subtitle: 'Harness the power of artificial intelligence to analyze student data, identify positive and negative trends in grades, and provide personalized suggestions to further student education.',
            },
            {
                backgroundColor: '#fff',
                image: <Image source={require('../assets/data.png')} />,
                title: 'Customizable Data Collection',
                subtitle: 'Allow teachers to collect and customize various types of data, including grades, behavior observations, physical projects, and comprehension notes, to capture a comprehensive view of student performance.',
            },
            {
                backgroundColor: '#fff',
                image: <Image source={require('../assets/visualization.png')} />,
                title: 'Data Visualization',
                subtitle: 'Present intuitive and visually appealing charts, graphs, and summary statistics to help teachers easily understand and interpret student data, enabling them to identify patterns and make informed decisions.',
            },
            {
                backgroundColor: '#fff',
                image: <Image source={require('../assets/teacher.png')} />,
                title: 'Teacher Assistance',
                subtitle: 'Act as a virtual teacher\'s assistant by offering helpful tools and features for efficient class management, such as student roster management, attendance tracking, and assignment management.',
            },
            {
                backgroundColor: '#fff',
                image: <Image source={require('../assets/collaboration.png')} />,
                title: 'Collaboration and Sharing',
                subtitle: 'Enable seamless collaboration and sharing of student information with other teachers and relevant stakeholders, promoting effective teamwork and ensuring a holistic understanding of student progress.',
            },
            {
                backgroundColor: '#fff',
                image: <Image source={require('../assets/calltoaction.png')} />,
                title: 'Get Started!',
                subtitle: 'Let\'s revolutionize education together!',
            },
            ]}
        />

        <Button
            title="Get Started"
            onPress={() => navigation.navigate('Login')}
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

export default OnboardingScreen;

