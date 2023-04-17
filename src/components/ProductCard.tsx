import React from "react";
import { StyleSheet, Text, TextInput, View, Image } from "react-native";






const ProductCard = (props: any) =>{

  return(
    <View >
     
      <Image style={{borderRadius: 10, borderWidth: 1, width: 100, height: 100, marginHorizontal: 10, marginTop: 10, marginBottom: 5}}
        source={props.source}
      />
      <View style = {{alignItems: 'center', width: 120, justifyContent: 'center'}}>
        <Text style = {{ }}>{props.title}</Text>
      </View>
      
      
    </View>
  )
   
};

export default ProductCard