import React, { Component } from 'react';
import './HangmanApp.css';
import HangmanIcon from './components/HangmanIcon';
import HangmanWord from './components/HangmanWord';
import HangmanLetters from './components/HangmanLetters';
import HangmanStatus from './components/HangmanStatus';

class HangmanApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: 'developer',
            letters: []
        }

        this.addLetterToState = this.addLetterToState.bind(this); //to kanoume afto oste to this entos tis addLetterToState na simenei this.HangmanApp kai oxi this.HangmanLetters
    }

    addLetterToState(letter) {
        const letters = [...this.state.letters, letter];
        this.setState({letters})
    }

    render() {
        const { word, letters } = this.state;
        const wrongGuesses = letters.filter(letter => !word.split("").includes(letter)).length;
        return (
            <div className="HangmanApp">
                <HangmanIcon wrongGuesses={wrongGuesses} />
                <HangmanWord word={word} letters={letters} />
                <HangmanLetters letters={letters} onClick={this.addLetterToState} />
                <HangmanStatus wrongGuesses={wrongGuesses} />
            </div>
        );
    }
}

export default HangmanApp;
