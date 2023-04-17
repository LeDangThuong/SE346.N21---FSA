import React from "react";
import { StyleSheet, Text, TextInput, View, Image, FlatList, TouchableOpacity } from "react-native";
import { IC_ShoppingCart } from "../../assets/icons";
import { IM_MauAo, IM_SaleImage } from "../../assets/images";
import ProductCard from "../../components/ProductCard";
import SearchInput from "../../components/SearchInput";
import CUSTOM_COLOR from "../../constants/colors";




const datas = [
  {
    id: '1',
    image: IM_MauAo,
    title: 'Áo len nâu'
  },
  {
    id: '2',
    image: IM_MauAo,
    title: 'Áo len nâu'
  },
  {
    id: '3',
    image: IM_MauAo,
    title: 'Áo len nâu'
  },
  {
    id: '4',
    image: IM_MauAo,
    title: 'Áo len nâu'
  },

];



function HomeScreenCustomer() {

 

    return (
      <View style = {{flex: 1}}>

          <View style = {{flexDirection: 'row'}}>
              <SearchInput
                placeholder = 'Search product'
              />
              <View style = {{backgroundColor: CUSTOM_COLOR.Mercury, 
                alignItems: 'center',
                justifyContent: 'center', 
                margin: 10, 
                padding: 8,
                borderRadius: 10
                }}>
                <Image 
                  source={IC_ShoppingCart}
                />
              </View>

              
              
          </View>

          <Text style = {styles.textView}>On sale</Text>

          <Image style= {{marginHorizontal: 30, height: 120, width: 380}}
            source={IM_SaleImage}
          />
          
          <View style={{flexDirection: "row", justifyContent: 'space-between'}}>
             <Text style = {styles.textView}>Trending now</Text>
             <TouchableOpacity><Text style={{margin:20}}>See all</Text></TouchableOpacity>
          </View>
          
          <View style ={{height: 140}}>
            <FlatList 
              windowSize ={10}
              horizontal = {true}
              data = {datas}
            
              renderItem = {({item}) => 
                <TouchableOpacity style = {{height: 10}}>
                  <ProductCard
                  source = {item.image}
                  title = {item.title}
                  />
                </TouchableOpacity>
                
                
              }
              keyExtractor={item => item.id}
            />

          </View>
          

          <View style={{flexDirection: "row", justifyContent: 'space-between'}}>
             <Text style = {styles.textView}>Orther categories</Text>
             <TouchableOpacity><Text style={{margin:20}}>Explore now</Text></TouchableOpacity>
          </View>

      </View>
      
    )
  }


const styles = StyleSheet.create({
  textView:{
    margin: 15,
    fontWeight: 'bold',
    color: CUSTOM_COLOR.Black,
    fontSize: 20
  }

})
  
export default HomeScreenCustomer