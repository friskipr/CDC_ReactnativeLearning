import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';
import Containers from './containers';

const store = createStore(reducer);

const App = () => {
    
    return (
        <Provider store={store}>
            <Containers />
        </Provider>
    );
}

export default App;