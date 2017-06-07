import React, { Component } from 'react'
import { connect } from 'react-redux'
import NoteDetail from '../components/notes-view/NoteDetail'
import * as actions from '../actions/NoteActions'

const mapStateToProps = (state, ownProps) => {
    let selectedNote = state.notes.filter(x => x.id === ownProps.id)

    return {
        note: selectedNote
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onEdit: (id, title, note) => {
        dispatch(actions.editNote(id, title, note))
    }    
})

export default connect(mapStateToProps, mapDispatchToProps)(NoteDetail);