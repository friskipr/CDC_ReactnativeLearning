import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './HeaderView';
import Footer from './FooterView';
import Home from './AddNote';
import Notes from './NotesView';
import Styles from '../styles/HomeStyles';

export default class Containers extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <Header />
                <Home />
                <Notes />
                <Footer />
            </View>
        );
    }
}