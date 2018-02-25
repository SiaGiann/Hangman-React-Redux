import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HangmanApp.css';
import HangmanIcon from './components/HangmanIcon';
import HangmanWord from './components/HangmanWord';
import HangmanLetters from './components/HangmanLetters';
import HangmanStatus from './components/HangmanStatus';

class HangmanApp extends Component {

    render() {
        const { word, letters } = this.props;
        const wrongGuesses = letters.filter(letter => !word.split("").includes(letter)).length;
        const gameIsWon = word.split("").filter(letter => letters.includes(letter)).length === word.split("").length;
        const gameIsActive = !gameIsWon && wrongGuesses < 6;
        const gameCondition = gameIsActive ? 0 : (gameIsWon ? 1 : 2);
        return (
            <div className="HangmanApp">
                <HangmanIcon wrongGuesses={wrongGuesses} />
                <HangmanWord word={word} letters={letters} />
                <HangmanLetters letters={letters} gameHasEnded={!gameIsActive}/>
                <HangmanStatus gameCondition={gameCondition} />
            </div>
        );
    }
}

const mapStateToProps = state => ({ //edw travame apo to store ta dedomena gia to state k ta pername sta props
    word: state.word,
    letters: state.letters
})

export default connect(mapStateToProps, null) (HangmanApp);
