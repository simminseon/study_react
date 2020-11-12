import * as React from 'react';
import PropTypes from 'prop-types';
import './Tictactoe.css';

export function Square({ onClick, value, index }) {
  let valueText = '';
  if (value > 0) {
    valueText = value === 1 ? 'X' : 'O';
  }

  const handleClick = () => {
    if ('' === valueText) {
      onClick(index);
    }
  };

  return (
    <button className="square" onClick={handleClick}>
      {valueText}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

Square.defaultProps = {};