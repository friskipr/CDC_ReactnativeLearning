import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import Styles from '../styles/HomeStyles';

export default class Header extends Component {
    render() {
        return (
            <View style={Styles.header}>
                <Text style={Styles.welcome}>
                    Welcome to Yeamoy APP
                </Text>
            </View>
        );
    }
}

module.exports = Header;