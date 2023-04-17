import React from "react";
import { StyleSheet, Text, TextInput, View, Image, FlatList, TouchableOpacity } from "react-native";
import { AirbnbRating, Rating } from "react-native-ratings";
import { IC_Back, IC_Heart, IC_ShoppingCart, IC_StartCorner, IC_StartFull } from "../../assets/icons";
import { IM_MauAo } from "../../assets/images";
import CUSTOM_COLOR from "../../constants/colors";


function DetailProduct({navigation}) {

 

    return (
      <View style = {styles.container}>

          <View style = {{flexDirection: 'row',   justifyContent: 'space-between'}}>

            <View style ={{flexDirection: "row", alignItems: 'center',}}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack();
                }}>
                    <Image
                        source={IC_Back}
                        style = {{
                            width: 10, 
                            height: 20,
                            margin: 20,

                        }}
                        resizeMode = 'stretch'
                    />  
                </TouchableOpacity>

                <Text style ={{height: 40, padding: 7, fontSize: 18, fontWeight: 'bold', color: CUSTOM_COLOR.Black}}>Product</Text>
            </View>

                
            <View style ={{flexDirection: "row", alignItems: 'center',}} >
                <Image
                    source={IC_Heart}
                    style = {{
                        margin: 10,

                    }}
                    resizeMode = 'stretch'
                />    

                <Image
                    source={IC_ShoppingCart}
                    style = {{  
                        margin: 10,
                        
                    }}
                    resizeMode = 'stretch'
                />  
            </View>

               
          </View>


        <View style = {{width: '100%', height: '40%', alignItems: 'center', justifyContent: 'center'}}>
            <Image
                source={IM_MauAo}
                style = {{
                    width: 240,
                    height: 240, borderRadius: 20
                }}
            />
        </View>

        <View>
           <Rating
                ratingImage = {IC_StartFull}
                type='custom'
           />
        </View>
          

      </View>
      
    )
  }


const styles = StyleSheet.create({
  container:{
    flex: 1,
   
  }

})
  
export default DetailProduct