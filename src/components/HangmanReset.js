import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './HangmanReset.css';

class HangmanLetters extends Component {
    render() {
        const { resetGame } = this.props;
        return (
            <button className="rst-button" onClick={()=> resetGame()}>
                New Game
            </button>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    resetGame: () => (dispatch({type: "RESET_GAME"}))
});

export default connect(null, mapDispatchToProps) (HangmanLetters);
