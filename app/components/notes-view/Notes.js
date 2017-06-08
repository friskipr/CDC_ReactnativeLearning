import React from 'react'
import { View } from 'react-native'
import Note from './Note'

const Notes = ({notes, onDelete}) => {   
    let n = [];
    for (var i in notes) {
        n.push(
            <Note 
                value={notes[i]}                 
                key={i}
                onDelete={onDelete}
            />
        );
    }

    return (        
        <View>
            {n}
        </View>        
    )
}

export default Notes