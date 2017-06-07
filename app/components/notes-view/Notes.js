import React from 'react'
import { TouchableOpacity , View, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Note from './Note'
import Styles from './styles'

const Notes = ({notes, onDelete, onView}) => {   
    let n = [];
    for (var i in notes) {
        n.push(
            <Note 
                value={notes[i]}                 
                key={i}
                onDelete={onDelete}
                onView={onView}
            />
        );
    }

    return (        
        <View style={Styles.notes}>
            <View style={Styles.list}>
                {n}
            </View>
            <View style={Styles.create}>
                <TouchableOpacity onPress={() => Actions.pageTwo() }>
                    <Image
                        style={Styles.createNote}
                        source={require('./img/new.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>        
    )
}

export default Notes