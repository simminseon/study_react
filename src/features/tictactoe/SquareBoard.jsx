import * as React from 'react';
import PropTypes from 'prop-types';
import { Square } from './Square';
import './Tictactoe.css';

// 보드판을 표시한다. 이벤트 및 필요 값들은 부모 컴포넌트를 통해 공급받는다.
export function SquareBoard() {
  return <div>squareBoard</div>;
}

SquareBoard.propTypes = {
  onClick: PropTypes.func.isRequired,
};
