import React, { Component } from 'react'
import { Text, TextInput, View, Image, TouchableOpacity, Alert } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Note from './Note'
import Styles from './styles'

class NoteDetail extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            editImgShow: true,
            editFormShow: false
        }
    }
    
    handleEdit(id) {        
        this.setState({ 
            editImgShow: false,
            editFormShow: true 
        })
    }
    
    render() {
        let value = (this.props.note && this.props.note.length) ? this.props.note[0] : ''
        
        let viewForm = () => {            
            return (this.state.editImgShow) ?
                        (<View style={Styles.noteDetail}>
                            <Text
                                style={Styles.viewForm}
                            >
                                {value.note}
                            </Text>
                            
                            <TouchableOpacity 
                                style={Styles.editImg}
                                onPress={() => { this.handleEdit(value.id) }}>
                                <Image
                                    style={Styles.createNote}
                                    source={require('./img/edit.png')}
                                />
                            </TouchableOpacity>
                        </View>) : null
        }

        let editForm = () => {
            return (this.state.editFormShow) ? <AddNote onEdit={this.props.onEdit} value={value} /> : null
        }

        return (
            <View style={{flex: 1}}>
                {viewForm()}
                
                {editForm()}                
            </View>
        )
    }
}

class AddNote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.value.id,
            title: this.props.value.title,
            note: this.props.value.note
        }
    }
    
    
    handleButtonClick = () => {            
        if (typeof this.state.title === 'undefined'
            || this.state.title === '') 
        {
            Alert.alert('Title is required!')

        } else {
            this.props.onEdit(this.state.id, this.state.title, this.state.note)
            Actions.pop()
        }
    }

    render() {
        return (
            <View style={Styles.content}>
                <View style={Styles.title}>
                    <Text 
                        style={{width: 100}}>Title
                    </Text>
                    <TextInput
                        returnKeyType='next'
                        onChangeText={ e => this.setState({ title: e })}
                        value={this.state.title}
                    />
                </View>

                <View style={Styles.noteField}>
                    <Text 
                        style={Styles.textTitle}>
                            Note
                    </Text>
                    <TextInput
                        style={Styles.textInput}
                        returnKeyType='go'
                        onChangeText={ e => this.setState({ note: e }) }
                        multiline={true}
                        maxLength={50}
                        numberOfLines={4}
                        textAlignVertical='top'
                        value={this.state.note}
                    />
                </View>

                <View style={Styles.button}>
                    <TouchableOpacity onPress={this.handleButtonClick}>
                        <Image
                            style={Styles.createNote}
                            source={require('./img/save.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default NoteDetail