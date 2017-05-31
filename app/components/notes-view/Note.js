import React from 'react'
import { Text, TouchableHighlight, View, Alert } from 'react-native'
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

const Note = ({value, onDelete}) => (
    <TouchableHighlight 
        style={Styles.note} 
        onPress={() => deleteAlert(onDelete, value.id)}
    >
        <View>
            <Text>{value.id}</Text>
            <Text>{value.title}</Text>
            <Text>{value.note}</Text>
        </View>
    </TouchableHighlight>
)

export default Note