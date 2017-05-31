import React, { Component } from 'react'
import { connect } from 'react-redux'
import Home from '../components/home-view/Home'
import * as actions from '../actions/NoteActions'

const mapStateToProps = () => ({

})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onSave: (title, text) => {
        dispatch(actions.addNote(title, text))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);