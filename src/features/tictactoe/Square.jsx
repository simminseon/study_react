import * as React from 'react';
import PropTypes from 'prop-types';
import './Tictactoe.css';

export function Square({ onClick, value, index }) {
  // 버튼에 표시될 텍스트를 정리한다
  let buttonText = '';
  if (value > 0) {
    buttonText = value === 1 ? 'X' : 'O';
  }

  const handleClick = () => {
    // 값이 0일때만 넘어온 함수 onClick에 인덱스를 전달한다
    if (0 === value) {
      onClick(index);
    }
  };

  return (
    <button className="square" onClick={handleClick}>
      {buttonText}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

Square.defaultProps = {};
