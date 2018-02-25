import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HangmanStatus.css';

class HangmanStatus extends Component {
    static propTypes = {
        gameCondition: PropTypes.number.isRequired
    }
    render() {
        const gameMessages = ["Please select a letter", "Congrats, you won!", "Game Over..."];
        const gameCssClass = ["inGame", "wonGame", "lostGame"];
        const { gameCondition } = this.props;
        const message = gameMessages[gameCondition]; //to pernei apo to HangmanApp to condition
        const cssClass = gameCssClass[gameCondition]; //to idio
        return (
            <div>
                <p className={`message ${cssClass}`}>{message}</p>
            </div>
        )
    }

}

export default HangmanStatus;
