import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AnimatedTest from './AnimatedTest';
import Home from './src/screens/Home';
import PanGestureHandl from './src/screens/PanGestureHandl';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <AnimatedTest /> */}
      {/* <Home /> */}
      <PanGestureHandl />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
