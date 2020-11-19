import * as React from 'react';
import PropTypes from 'prop-types';
import './Tictactoe.css';

export function BoardHistory() {
  return <div>BoardHistory</div>;
}

BoardHistory.defaultProps = {
  boardHistory: [],
};

BoardHistory.propTypes = {
  boardHistory: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
