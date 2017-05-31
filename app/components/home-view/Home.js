import React from 'react'
import { Text, TextInput, View, Button } from 'react-native'
import Styles from '../../styles/HomeStyles'

const Home = ({onSave}) => {
    return (
        <View style={Styles.content}>
            <View style={Styles.row}>
                <Text 
                    style={{width: 100}}>Title
                </Text>
                <TextInput
                    returnKeyType='next'
                    onChangeText={ e => this.title = e }
                />
            </View>

            <View style={Styles.row}>
                <Text 
                    style={{width: 100}}>
                        Note
                </Text>
                <TextInput
                    returnKeyType='go'
                    onChangeText={ e => this.text = e }
                    multiline={true}
                    maxLength={50}
                    numberOfLines={4}
                />
            </View>

            <Button
                onPress={ e => onSave(this.title, this.text) }
                title="SAVE"
                color="#000"
                accessibilityLabel="Save note"
                />
        </View>
    );    
}

export default Home