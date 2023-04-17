import React from 'react';
import {IMG_Pngtreetwittersocialmediaroundicon_87048231} from '../../assets/icons';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

class InstagramButton extends React.Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <TouchableOpacity onPress={this.props.onPress}>
            <IMG_Pngtreetwittersocialmediaroundicon_87048231 />
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

export default InstagramButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
