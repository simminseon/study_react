import * as React from 'react';
import PropTypes from 'prop-types';
import './Tictactoe.css';

export function Square() {
  return <div>square</div>;
}

Square.propTypes = {
  value: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

Square.defaultProps = {};
