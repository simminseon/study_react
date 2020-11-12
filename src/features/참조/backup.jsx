import * as React from "react";
import { useState } from "react";
import { Square } from './Square';
// import React, { useState } from 'react';

export function Tictactoe() {
  return(
    <Game />
  );
}


function Board() {
  const basicArray = [0,0,0,0,0,0,0,0,0]
  const [textValue, setTextValue] = useState(basicArray);
  const [xIsNext, setXIsNext] = useState(1);
  const handleClick = (i) => {
    if(textValue[i] === 0) {
      const squares = textValue.map((data, index) => {
        if(index === i) {
          setXIsNext(!xIsNext);
          textValue[i] =  xIsNext ? 1 : 2;
          return textValue[i];
        } else {
          return data;
        }
      });

      setTextValue(squares);
    }
  }
  let status;
  const winner = calculateWinner(textValue);
  
  if(winner) {
    const winerText = winner === 1 ? "X" : "O"
    status = `Winner: ${winerText}`;
  } else {
    const player = xIsNext ? 1 : 2;
    const playerText = player === 1 ? "X" : "O"
    status = `Next player: ${playerText}`;
  }
  const renderSquare = (i) => {
    return <Square onClick={() => handleClick(i)} value={textValue[i]} />;
    // onClick에서 값을 넘겨줄 때는 화살표함수 안에 넣어줘야함!!!!!
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}