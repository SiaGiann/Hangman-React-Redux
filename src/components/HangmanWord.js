import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HangmanWord.css';

class HangmanWord extends Component {
    static propTypes = {
        word: PropTypes.string.isRequired,
        letters: PropTypes.arrayOf(PropTypes.string)
    }

    render() {
        // const word = this.props.word;
        // const letters = this.props.letters;
        const { word, letters } = this.props;
        const displayWord = word.split('').map(letter => (letters.includes(letter) ? letter : "_")).join(" ");
        return (
            <div className="wordContainer">
                <span className="word">
                    {displayWord}
                </span>
            </div>
        )
    }

}

export default HangmanWord;
