import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Import components
import CustomHeader from '../components/CustomHeader';



const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <CustomHeader />
      <Text style={styles.title}>Home</Text>
      <Text style={styles.body }>This is the start of the TeacherData App!</Text>
      {/* Add your home page content here */}
    </View>
  );
};

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

export default HomeScreen;
