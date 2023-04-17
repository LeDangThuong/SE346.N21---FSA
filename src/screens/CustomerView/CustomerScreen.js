import React from "react";
import { StyleSheet, Text, TextInput, View, Image, FlatList, TouchableOpacity } from "react-native";
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreenCustomer from './HomeScreenCustomer'
import NotificationScreen from "./NotificationScreen";
import FollowScreen from "./FollowScreen";
import AccountScreen from "./AccountScreen";
import { IC_Heart, IC_Home, IC_User, IC_Vector } from "../../assets/icons";
import CUSTOM_COLOR from "../../constants/colors";


const TabBottom = createBottomTabNavigator()

function CustomerScreen() {

    return (
      <NavigationContainer>
        <TabBottom.Navigator
          
            screenOptions={
               {
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 0,
                },
                
                tabBarShowLabel: false,
                
                headerShown: false,

                
               }

            }   

           
        
        >
            <TabBottom.Screen  name = 'HomeScreen' component={HomeScreenCustomer} options = {{
                tabBarLabel: 'Home',
                tabBarIcon: ({focused}) =>{
                    return( 
                        <View style ={{alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                            source={IC_Home}
                            resizeMode = 'stretch'
                            style = {{
                                width: 20,
                                height: 20,
                                tintColor: focused ? CUSTOM_COLOR.Carnation : CUSTOM_COLOR.ChathamsBlue
                            }}
                    
                        />
                            <Text style = {{
                                fontSize: focused ? 14 : 12,
                                color: focused ? CUSTOM_COLOR.Carnation : CUSTOM_COLOR.ChathamsBlue
                            }}>Home</Text>
                        </View>
                )
                   
                    
                }
            }}/>

            <TabBottom.Screen name = 'Notification' component={NotificationScreen} options = {{
                tabBarLabel: 'Notification',
                tabBarIcon: ({focused}) =>{
                    return( 
                        <View style ={{alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                            source={IC_Vector}
                            resizeMode = 'stretch'
                            style = {{
                                width: 20,
                                height: 20,
                                tintColor: focused ? CUSTOM_COLOR.Carnation : CUSTOM_COLOR.ChathamsBlue
                            }}
                    
                        />
                            <Text style = {{
                                fontSize: focused ? 14 : 12,
                                color: focused ? CUSTOM_COLOR.Carnation : CUSTOM_COLOR.ChathamsBlue
                            }}>Notification</Text>
                        </View>
                )
                   
                    
                }
            }}
            
            />

            <TabBottom.Screen name = 'FollowScreen' component={FollowScreen} 
            options = {{
                tabBarLabel: 'Follow',
                tabBarIcon: ({focused}) =>{
                    return( 
                        <View style ={{alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                            source={IC_Heart}
                            resizeMode = 'stretch'
                            style = {{
                                width: 20,
                                height: 20,
                                tintColor: focused ? CUSTOM_COLOR.Carnation : CUSTOM_COLOR.ChathamsBlue
                            }}
                    
                        />
                            <Text style = {{
                                fontSize: focused ? 14 : 12,
                                color: focused ? CUSTOM_COLOR.Carnation : CUSTOM_COLOR.ChathamsBlue
                            }}>Follow</Text>
                        </View>
                )
                   
                    
                }
            }}
            />

            <TabBottom.Screen name = 'AccountScreen' component={AccountScreen} 
                options = {{
                    tabBarLabel: 'Account',
                    tabBarIcon: ({focused}) =>{
                        return( 
                            <View style ={{alignItems: 'center', justifyContent: 'center'}}>
                                <Image
                                source={IC_User}
                                resizeMode = 'stretch'
                                style = {{
                                    width: 20,
                                    height: 20,
                                    tintColor: focused ? CUSTOM_COLOR.Carnation : CUSTOM_COLOR.ChathamsBlue
                                }}
                        
                            />
                                <Text style = {{
                                    fontSize: focused ? 14 : 12,
                                    color: focused ? CUSTOM_COLOR.Carnation : CUSTOM_COLOR.ChathamsBlue
                                }}>Account</Text>
                            </View>
                    )
                       
                        
                    }
                }}
            />

        </TabBottom.Navigator>

      </NavigationContainer>
      
    )
  }



  
export default CustomerScreen