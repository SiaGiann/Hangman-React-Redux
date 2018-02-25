import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HangmanStatus.css';

class HangmanStatus extends Component {
    static propTypes = {
        wrongGuesses: PropTypes.number.isRequired
    }
    render() {
        const { wrongGuesses } = this.props;
        const message = wrongGuesses > 5 ? 'game over' : 'please select a letter...';
        const gameStatus = wrongGuesses > 5 ? 'lostGame' : 'inGame';
        return (
            <div>
                <p className={`message ${gameStatus}`}>{message}</p>
            </div>
        )
    }

}

export default HangmanStatus;
