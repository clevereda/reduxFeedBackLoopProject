import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedbackReducer = (state = [], action) => {

    let newState = [...state];

    if (action.type === 'FEELING'){
        newState = [...state, action.payload];
    }
    if (action.type === 'UNDERSTANDING'){
        newState = [...state, action.payload];
    }
    if (action.type === 'SUPPORTED') {
        newState = [...state, action.payload];
    }
    if (action.type === 'COMMENTS') {
        newState = [...state, action.payload];
    }

    if (action.type === 'RESTART'){
        newState = [...action.payload];
    }

    return newState;
}

const storeInstance = createStore(
    combineReducers({
        feedbackReducer,
    }),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    applyMiddleware(logger),
);



ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
