/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

<<<<<<< HEAD
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import OverView from './src/screens/Staff View/OverView';
import { Screen } from 'react-native-screens';
const Stack = createNativeStackNavigator();

export default function App (){
    return (
     <Screen onComponentRef={OverView}>
     </Screen>
    )
=======
import React from "react";
import { StyleSheet, Text, TextInput, View, Image } from "react-native";

import SearchInput from "./src/components/SearchInput";
import CustomerScreen from "./src/screens/CustomerView/CustomerScreen";





//const Stack = createNativeStackNavigator();

function App() {
  return (
    <CustomerScreen/>
  )
>>>>>>> ac2def58d1304ebf9099b59af067a808fff78e2c
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
<<<<<<< HEAD
    alignItems: 'center',
    justifyContent: 'center'
=======
    justifyContent: 'center',
    alignItems: 'center'
>>>>>>> ac2def58d1304ebf9099b59af067a808fff78e2c
  }
});

