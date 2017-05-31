import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image
} from 'react-native';
import Styles from '../styles/HomeStyles';

export default class Footer extends Component {
    render() {
        return (
            <View style={Styles.footer}>
                <Greeting style={Styles.time} />
            </View>
        );
    }
}

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
        this.setState({ time: new Date() });
      }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    let time = this.state.time.toISOString();
    return (
      <Text style={this.props.style}>Time : { time }</Text>
    );
  }
}

module.exports = Footer;