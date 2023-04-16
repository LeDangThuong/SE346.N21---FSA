import React from "react";
import { StyleSheet, Text, TextInput, View, Image } from "react-native";
import { SearchIcon } from "../assets/icons/index.js";
import CUSTOM_COLOR from "../constants/colors";





const SearchInput = (props: any) =>{

  return(
    <View style = {{
      flexDirection: 'row', 
      borderWidth: 1, 
      alignItems: 'center',
      padding: 10,
      borderRadius: 20,
      height: 40,
      width: 320,
      backgroundColor: CUSTOM_COLOR.Mercury,
      margin: 10
        }}>
      <Image
        style = {{
          marginRight: 5,
          width: 20,
          height: 20
        }}
        source = {SearchIcon}
       
      />
      <TextInput style = {{width: '70%', height: 30, borderWidth: 0, padding:5}}
        placeholder = {props.placeholder}
      />
      
    </View>
  )
   
};

export default SearchInput