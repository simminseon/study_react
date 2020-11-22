import * as React from 'react';
import PropTypes from 'prop-types';
import './Tictactoe.css';

export function Square({ onClick, value, index }) {

  let buttonText = '';
  if(value > 0) {
    buttonText = value == 1 ? "X" : "O";
  }

  const handleClick = () => {
    if(0 === value) {
      onClick(index);
    }
  }

  return <button className="square" onClick={handleClick}>{buttonText}</button>
}