import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './HangmanLetters.css';

class HangmanLetters extends Component {
    static propTypes = {
        letters: PropTypes.arrayOf(PropTypes.string),
        gameHasEnded: PropTypes.bool.isRequired
    }

    render() {
        const allLetters = [
            'a', 'b', 'c', 'd', 'e', 'f',
            'g', 'h', 'i', 'j', 'k', 'l',
            'm', 'n', 'o', 'p', 'q', 'r',
            's', 't', 'u', 'v', 'w', 'x',
            'y', 'z'
        ];

        const { letters, guessLetter, gameHasEnded } = this.props;
        const letterButtons = allLetters.map(letter => (
            <button
                className={`letter${letters.includes(letter) || gameHasEnded ? " disable" : ""}`}
                key={letter}
                name={letter}
                disabled={letters.includes(letter) || gameHasEnded}
                onClick={() => guessLetter(letter)}
            >{ letter }</button>
        ));
        return (
            <div className="letters">
                {letterButtons}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    guessLetter: (letter) => (dispatch({type: "GUESS_LETTER", letter: letter}))
});

export default connect(null, mapDispatchToProps) (HangmanLetters);
