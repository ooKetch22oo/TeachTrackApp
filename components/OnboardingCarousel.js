// create a carousel that displays the features of the app
// provide an overview of its features
// the features should include: 
// AI-Powered Analysis: Harness the power of artificial intelligence to analyze student data, identify positive and negative trends in grades, and provide personalized suggestions to further student education.
// Customizable Data Collection: Allow teachers to collect and customize various types of data, including grades, behavior observations, physical projects, and comprehension notes, to capture a comprehensive view of student performance.
// Data Visualization: Present intuitive and visually appealing charts, graphs, and summary statistics to help teachers easily understand and interpret student data, enabling them to identify patterns and make informed decisions.
// Teacher Assistance: Act as a virtual teacher's assistant by offering helpful tools and features for efficient class management, such as student roster management, attendance tracking, and assignment management.
// Collaboration and Sharing: Enable seamless collaboration and sharing of student information with other teachers and relevant stakeholders, promoting effective teamwork and ensuring a holistic understanding of student progress. */


import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';

// Import components
import CustomHeader from '../components/CustomHeader';

const OnboardingCarousel = () => {
    const carouselData = [
      {
        title: 'Welcome to our educational app! ',
        description: 'We empower teachers with data-driven insights and AI-powered analysis to enhance student success. Easily collect customizable data, visualize it in engaging charts, and discover trends in student performance.',
      },
      {
        title: 'AI-Powered Analysis',
        description: 'Harness the power of artificial intelligence to analyze student data, identify positive and negative trends in grades, and provide personalized suggestions to further student education.',
      },
      // Add more slides for other features
      {
        title: 'Customizable Data Collection',
        description: 'Allow teachers to collect and customize various types of data, including grades, behavior observations, physical projects, and comprehension notes, to capture a comprehensive view of student performance.',
      },
        {
        title: 'Data Visualization',
        description: 'Present intuitive and visually appealing charts, graphs, and summary statistics to help teachers easily understand and interpret student data, enabling them to identify patterns and make informed decisions.',
        },
        {
        title: 'Teacher Assistance',
        description: 'Act as a virtual teacher\'s assistant by offering helpful tools and features for efficient class management, such as student roster management, attendance tracking, and assignment management.',
        },
        {
        title: 'Collaboration and Sharing',
        description: 'Enable seamless collaboration and sharing of student information with other teachers and relevant stakeholders, promoting effective teamwork and ensuring a holistic understanding of student progress.',
        }

    ];
  
    const renderItem = ({ item }) => (
      <View style={styles.slideContainer}>
        <Text style={styles.slideTitle}>{item.title}</Text>
        <Text style={styles.slideDescription}>{item.description}</Text>
      </View>
    );
  
    return (
      <Carousel
        data={carouselData}
        renderItem={renderItem}
        sliderWidth={300} // Adjust the width according to your layout
        itemWidth={300} // Adjust the width according to your layout
        layout="default"
      />
    );
  };
  
  const styles = StyleSheet.create({
    slideContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    slideTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    slideDescription: {
      fontSize: 16,
      textAlign: 'center',
    },
  });
  
  export default OnboardingCarousel;
  