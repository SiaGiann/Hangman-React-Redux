import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HangmanLetters.css';

class HangmanLetters extends Component {
    constructor(props) {
        super(props);

        this.guessLetter = this.guessLetter.bind(this);
    }

    static propTypes = {
        letters: PropTypes.arrayOf(PropTypes.string),
        onClick: PropTypes.func
    }

    guessLetter(e) {
        this.props.onClick(e.target.name);
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
                className={`letter${letters.includes(letter) ? " disable" : ""}`}
                key={letter}
                name={letter}
                disabled={letters.includes(letter)}
                onClick={this.guessLetter}
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
