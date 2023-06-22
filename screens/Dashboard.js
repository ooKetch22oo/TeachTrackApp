import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Import components
import CustomHeader from '../components/CustomHeader';

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <CustomHeader />
      <Text style={styles.title}>Dashboard</Text>
      {/* Add your Dashboard content here */}
    </View>
  );
};

const styles = StyleSheet.create({
  ontainer: {
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

export default DashboardScreen;
