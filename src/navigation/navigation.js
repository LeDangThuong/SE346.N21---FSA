import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeUser from '../screens/LOGIN & SIGN-UP/WelcomeUser.js';
const Stack = createNativeStackNavigator();
function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="WelcomeUser"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="WelcomeUser" component={WelcomeUser} />
    </Stack.Navigator>
  );
}

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
export default MainNavigator;
