import C from '../constants/note';

export function addNote(title='', text='') {
    return ({
        type: C.ADD_NOTE,
        payload: {            
            title: title,
            note: text
        }
    })
}

export function removeNote(id) {
    return ({
        type: C.REM_NOTE,
        payload: {
            id: id
        }
    })
}