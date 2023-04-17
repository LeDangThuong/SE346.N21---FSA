/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { StyleSheet, Text, TextInput, View, Image } from "react-native";

import SearchInput from "./src/components/SearchInput";
import CustomerScreen from "./src/screens/CustomerView/CustomerScreen";





//const Stack = createNativeStackNavigator();

function App() {
  return (
    <CustomerScreen/>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
