import React, { Component } from 'react';
import './HangmanApp.css';
import HangmanIcon from './components/HangmanIcon';

class HangmanApp extends Component {
  render() {
    return (
      <div className="HangmanApp">
        <HangmanIcon wrongGuesses={2} />
      </div>
    );
  }
}

export default HangmanApp;
