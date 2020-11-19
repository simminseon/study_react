import * as React from 'react';
// import * as Redux from 'react-redux';

import './Tictactoe.css';

import { SquareBoard } from './SquareBoard';
import { BoardHistory } from './BoardHistory';
import { Player } from './Player';
import { iteratee } from 'lodash';
// import { tictactoeAction, tictactoeSelector } from './Tictactoe.slice';

// 게임 초기화 데이터. 모든 판은 0으로 설정된다.
const initSquareList = [0, 0, 0, 0, 0, 0, 0, 0, 0];

export function Tictactoe() {
  const [boardData, setBoardData] = React.useState(initSquareList)
  const handleClick = (i) => {
    const squares = boardData.map((data) => {
      return data
      
    });
    console.log(i.target.index)
  }
  return (
    <>
    <div className="board-row">
      <Square index={0} onClick={handleClick} />
      <Square index={1} onClick={handleClick} />
      <Square index={2} onClick={handleClick} />
    </div>
    <div className="board-row">
      <Square index={3} onClick={handleClick} />
      <Square index={4} onClick={handleClick} />
      <Square index={5} onClick={handleClick} />
    </div>
    <div className="board-row">
      <Square index={6} onClick={handleClick} />
      <Square index={7} onClick={handleClick} />
      <Square index={8} onClick={handleClick} />
    </div>
    </>
  );
}

function Square({onClick, index}) {
  
return <button className="square" onClick={onClick}>{index}</button>
}