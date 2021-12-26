import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AnimatedTest from './AnimatedTest';
import Home from './src/screens/Home';
import InterpolateWithScrollView from './src/screens/InterpolateWithScrollView';
import PanGestureHandl from './src/screens/PanGestureHandl';

export default function App() {
  return (
    // <View style={styles.container}>
    //<AnimatedTest />
    //<Home />
    //<PanGestureHandl />
    <InterpolateWithScrollView />
    //</View>
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
