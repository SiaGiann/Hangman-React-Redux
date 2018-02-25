import React, { Component } from 'react';
import './HangmanApp.css';
import HangmanIcon from './components/HangmanIcon';
import HangmanWord from './components/HangmanWord';
import HangmanLetters from './components/HangmanLetters';

class HangmanApp extends Component {
  render() {
    return (
      <div className="HangmanApp">
        <HangmanIcon wrongGuesses={0} />
        <HangmanWord word={'developer'} letters={['e', 'v']} />
        <HangmanLetters letters={['e', 'v']} />
      </div>
    );
  }
}

export default HangmanApp;
