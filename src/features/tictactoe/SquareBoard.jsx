import * as React from 'react';
import PropTypes from 'prop-types';
import { Square } from './Square';
import './Tictactoe.css';

// 보드판을 표시한다. 이벤트 및 필요 값들은 부모 컴포넌트를 통해 공급받는다.
export function SquareBoard({ selectedBoard, onClick }) {
  return (
    <div>
      <div className="board-row">
        {/* 해당 보드의 값과 인덱스, 온클릭 이벤트를 전달한다 */}
        <Square value={selectedBoard[0]} index={0} onClick={onClick} />
        <Square value={selectedBoard[1]} index={1} onClick={onClick} />
        <Square value={selectedBoard[2]} index={2} onClick={onClick} />
      </div>
      <div className="board-row">
        <Square value={selectedBoard[3]} index={3} onClick={onClick} />
        <Square value={selectedBoard[4]} index={4} onClick={onClick} />
        <Square value={selectedBoard[5]} index={5} onClick={onClick} />
      </div>
      <div className="board-row">
        <Square value={selectedBoard[6]} index={6} onClick={onClick} />
        <Square value={selectedBoard[7]} index={7} onClick={onClick} />
        <Square value={selectedBoard[8]} index={8} onClick={onClick} />
      </div>
    </div>
  );
}

SquareBoard.propTypes = {
  onClick: PropTypes.func.isRequired,
};
