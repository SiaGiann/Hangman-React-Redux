import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import './index.css';
import HangmanApp from './HangmanApp';
import registerServiceWorker from './registerServiceWorker';

const randomWords = require('random-words');

const state = {
    word: randomWords(),
    letters: []
}

const store = createStore(rootReducer, state);

//kanei diathesimo to store apo oli tin efarmogi mas
ReactDOM.render(
    <Provider store={store}>
        <HangmanApp />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
