import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View>
                <Text>
                    Welcome to Yeamoy APP
                </Text>
            </View>
        );
    }
}

module.exports = Header;