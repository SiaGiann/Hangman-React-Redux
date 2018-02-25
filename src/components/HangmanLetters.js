import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HangmanLetters.css';

class HangmanLetters extends Component {
    static propTypes = {
        letters: PropTypes.arrayOf(PropTypes.string)
    }

    render() {
        const allLetters = [
            'a', 'b', 'c', 'd', 'e', 'f',
            'g', 'h', 'i', 'j', 'k', 'l',
            'm', 'n', 'o', 'p', 'q', 'r',
            's', 't', 'u', 'v', 'w', 'x',
            'y', 'z'
        ];

        const { letters } = this.props;
        const letterButtons = allLetters.map(letter => (
            <button
                className='letter'
                className={`letter${letters.includes(letter) ? " disable" : ""}`}
                key={letter}
                disabled={letters.includes(letter)}
            >{ letter }</button>
        ));
        return (
            <div className="letters">
                {letterButtons}
            </div>
        );
    }

}

export default HangmanLetters;
