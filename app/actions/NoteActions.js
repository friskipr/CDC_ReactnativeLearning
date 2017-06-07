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

export function viewNote(id) {
    return ({
        type: C.VIEW_NOTE,
        payload: {
            id: id
        }
    })
}

export function editNote(id, title, note) {
    return ({
        type: C.EDIT_NOTE,
        payload: {
            id: id,
            title: title,
            note: note
        }
    })
}