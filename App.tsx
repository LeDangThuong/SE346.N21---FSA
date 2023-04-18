import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import MainNavigator from './src/navigation/navigation.js';
import type {PropsWithChildren} from 'react';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <MainNavigator></MainNavigator>
    </SafeAreaView>
  );}

const styles = StyleSheet.create({
});

export default App;
