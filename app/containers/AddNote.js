import React, { Component } from 'react'
import { connect } from 'react-redux'
import Home from '../components/notes-view/AddNote'
import * as actions from '../actions/NoteActions'

const mapStateToProps = () => ({

})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onSave: (title, text) => {
        dispatch(actions.addNote(title, text))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);