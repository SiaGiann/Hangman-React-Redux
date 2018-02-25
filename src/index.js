import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HangmanApp from './HangmanApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HangmanApp />, document.getElementById('root'));
registerServiceWorker();
