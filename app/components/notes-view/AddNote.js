import React from 'react'
import { Text, TextInput, View, TouchableOpacity, Image, Alert } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Styles from './styles'

const AddNote = ({onSave}) => {
    handleButtonClick = () => {            
        if (typeof this.title === 'undefined') {
            Alert.alert('Title is required!')
        } else {
            onSave(this.title, this.text)
            Actions.pop()
        }
    }

    return (
        <View style={Styles.content}>
            <View style={Styles.title}>
                <Text 
                    style={{width: 100}}>Title
                </Text>
                <TextInput
                    returnKeyType='next'
                    onChangeText={ e => this.title = e }
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
                    onChangeText={ e => this.text = e }
                    multiline={true}
                    maxLength={50}
                    numberOfLines={4}
                    textAlignVertical='top'
                />
            </View>

            <View style={Styles.button}>
                <TouchableOpacity onPress={handleButtonClick}>
                    <Image
                        style={Styles.createNote}
                        source={require('./img/save.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );    
}

export default AddNote