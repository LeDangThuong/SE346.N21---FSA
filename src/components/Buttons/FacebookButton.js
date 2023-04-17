import React from 'react';
import {IC_Facebook} from '../../assets/icons';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

// Button Facebook in Sign In Screen

class FacebookButton extends React.Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <TouchableOpacity onPress={this.props.onPress}>
            <IC_Facebook />
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

export default FacebookButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
