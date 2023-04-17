import React from 'react';
import {IMG_google1} from '../../assets/icons';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

// Button Google in Sign In Screen

class GoogleButton extends React.Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <TouchableOpacity onPress={this.props.onPress}>
            <IMG_google1 />
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

export default GoogleButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
