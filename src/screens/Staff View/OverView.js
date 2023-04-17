import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import CUSTOM_COLOR from '../.././constants/colors.js';
import { createNavigationContainerRef } from '@react-navigation/native'
import { settingicon } from '../../assets/icons/index.js';
const OverView = () => {
  return (
    <SafeAreaView>
    <View style = {{width: '100%',height: '13%'}}>
      <Image style = {styles.settingicon}>
        source = {settingicon}
      </Image>
    </View>
    <View style = {{width:'100%',height:'2%', backgroundColor: CUSTOM_COLOR.Gray}}>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    settingicon:{
        width: '4.5%',
        height: '2.6%',
        marginRight: '22%',
        marginTop: '1.5%',
        verticalAlign: 'middle'
    }
})

export default OverView