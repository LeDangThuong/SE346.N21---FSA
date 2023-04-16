import React, {useState} from 'react';
// import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import CUSTOM_COLOR from '../.././constants/colors.js';
import FONT_FAMILY from '../.././constants/fonts.js';
import {IMG_PexelsPhotobyRioKuncoro} from '../.././assets/images/index.js';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Intro = props => {
  const {navigation} = props;
  const [status, setStatus] = useState('');
  return (
    <SafeAreaView>
        <>
        <Image>
        source={IMG_ICON_PREVIOUS},
        styles = style={styles.imageContainer}
        </Image>
        </>

        <>
        </>

        <>
        </>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    imageContainer:{
        width: '100%',
        height: '100%',
    }


});
export default Intro;
