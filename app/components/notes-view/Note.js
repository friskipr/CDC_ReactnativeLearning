import React from 'react'
import { Text, TouchableHighlight, View, Alert } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Styles from './styles'

let deleteAlert = (handler, id) => {
    Alert.alert(
        '',
        'Are you sure to delete this ?',
        [
            {
                text: 'OK',
                onPress: () => handler(id)
            },
            {
                text: 'Cancel',
                onPress: () => {}
            }
        ]
    )
}

let handleView = (value) => {    
    Actions.pageThree({ title: value.title, id: value.id })
}

const Note = ({value, onDelete}) => (    
    <TouchableHighlight 
        style={Styles.note}
        underlayColor='#E0E0E0'
        onPress={ () => { handleView(value)} }
        onLongPress={ () => deleteAlert(onDelete, value.id) }
    >
        <View>            
            <Text>{value.title}</Text>            
        </View>
    </TouchableHighlight>
)

export default Note