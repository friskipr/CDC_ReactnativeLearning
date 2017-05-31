import React from 'react'
import { connect } from 'react-redux'
import Notes from '../components/notes-view/Notes'
import * as actions from '../actions/NoteActions'

const mapStateToProps = (state) => ({
    notes: state.notes
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onDelete: (id) => {
        dispatch(actions.removeNote(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Notes);