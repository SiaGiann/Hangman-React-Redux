import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HangmanIcon.css';

class HangmanIcon extends Component {
    static propTypes = {
        wrongGuesses: PropTypes.number.isRequired
    }

    render() {
        const status = this.props.wrongGuesses;
        return (
            <div>
                <img src={'images/hangmanIcons/hangman' + status + '.png'}
                    alt="Hangman icon" />
            </div>
        )
    }

}

export default HangmanIcon;
