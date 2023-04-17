import React from 'react';
import {IC_Google} from '../../assets/icons';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

class GoogleButton extends React.Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <TouchableOpacity onPress={this.props.onPress}>
            <IC_Google />
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
