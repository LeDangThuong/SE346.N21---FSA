import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import CUSTOM_COLOR from '../../constants/colors';
import scale from '../../constants/responsive';
import FONT_FAMILY from '../../constants/fonts';

class CustomButton extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[
            styles.button,
            this.props.type === 'primary'
              ? styles.buttonPrimary
              : styles.buttonSecondary,
          ]}
          onPress={this.props.onPress}>
          <Text
            style={[
              styles.textButton,
              this.props.type === 'primary'
                ? styles.textButtonPrimary
                : styles.textButtonSecondary,
            ]}>
            {this.props.text}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  button: {
    width: scale(275),
    height: scale(56, 'height'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(16),
    alignSelf: 'center',
  },

  buttonPrimary: {
    backgroundColor: CUSTOM_COLOR.FlushOrange,
  },

  buttonSecondary: {
    backgroundColor: CUSTOM_COLOR.Carnation,
  },

  textButton: {
    fontFamily: FONT_FAMILY.Semibold,
    fontSize: scale(16),
  },

  textButtonPrimary: {
    color: CUSTOM_COLOR.White,
  },

  textButtonSecondary: {
    color: CUSTOM_COLOR.White,
  },
});
