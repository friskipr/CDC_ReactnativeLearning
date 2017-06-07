import C from '../constants/note';
import U from '../utils/Utils';

const initialState = [{
    id: U.createGUID(),
    title: 'EXAMPLE',
    note: 'testt....'
}];

const notes = (state = initialState, action) => {
    switch (action.type) {

        case C.ADD_NOTE:
            return [
                {
                    id: U.createGUID(),
                    title: action.payload.title,
                    note: action.payload.note
                },
                ...state
            ];
        
        case C.REM_NOTE:
            let notes = state.filter((x) => x.id !== action.payload.id);
            return notes;
        
        case C.EDIT_NOTE:
            return state.map(x =>
                x.id === action.payload.id ?
                    {
                        ...x, 
                        title: action.payload.title,
                        note: action.payload.note

                    } : 
                    x
                )
            
        default:
            return state;
    }
}

export default notes;