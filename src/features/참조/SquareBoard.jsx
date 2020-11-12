import * as React from 'react';
import PropTypes from 'prop-types';
import { Square } from './Square';
import './Tictactoe.css';

export function SquareBoard({ selectedBoard, onClick }) {
  console.log('selectedBoard', selectedBoard);
  return (
    <div>
      <div className="board-row">
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