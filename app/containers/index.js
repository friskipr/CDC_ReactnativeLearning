import React, { Component } from 'react';
import { View, Button } from 'react-native'
import { Router, Scene, Actions } from 'react-native-router-flux'
import Header from './HeaderView'
import Footer from './FooterView'
import AddNote from './AddNote'
import NotesView from './NotesView'
import NoteDetail from './NoteDetail'

export default class Containers extends Component {
    render() {
        return (            
            <Router>                
                <Scene key="root">
                    <Scene key="pageOne" component={NotesView} title="Notes" initial={true} />
                    <Scene key="pageTwo" component={AddNote} title="New Note"/>
                    <Scene key="pageThree" component={NoteDetail} title={this.props.title} id={this.props.id} />
                </Scene>
            </Router>
        );
    }
}