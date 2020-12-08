import { Tictactoe } from '@/features/tictactoe/Tictactoe';
import * as React from 'react';

const initialData = [0, 0, 0, 0, 0, 0, 0, 0, 0];

export function Tictactoe2() {
    const [ count, setCount ] = React.useState(0);
    const [ boardData, setBoardData ] = React.useState(initialData);
    const whoIsWinner = checkWinner(boardData);
    const [ boardHistory, setBoardHistory ] = React.useState([initialData]);
    const player = (count % 2) + 1;
    const isWin = whoIsWinner > 0
    const handleClick = (selectedIndex) => {
        if(whoIsWinner === 0) {
            const selectedBoardData = boardData.map((data, index) => 
                index === selectedIndex ? player : data
            );
            setBoardData(selectedBoardData)
            setCount((count) => count + 1);
            const selectedHistoryData = boardHistory.filter((data, index) => index <= count)
            setBoardHistory([...selectedHistoryData, selectedBoardData])
            console.log(selectedHistoryData)
        }
    }
    const winCheck = isWin ? 2 : 1;
    const winnerText = winCheck === player ? "X" : "O"
    const desc = winCheck === 2 ? "Winner: " : "next player : ";


    
    const handleHistory = (historyIndex) => {
        const selectedHistoryData = boardHistory.find((history, index) => index === historyIndex)
        setBoardData(selectedHistoryData);
        setCount(historyIndex)
        
    }
    // const buttonText = index ? `back to history => ${index}` : `Go to game start`;
    return (
        <>
        <div>{desc}{winnerText}</div>
        <div className="board-row">
            <Square value={boardData[0]} index={0} onClick={handleClick} />
            <Square value={boardData[1]} index={1} onClick={handleClick} />
            <Square value={boardData[2]} index={2} onClick={handleClick} />
        </div>
        <div className="board-row">
            <Square value={boardData[3]} index={3} onClick={handleClick} />
            <Square value={boardData[4]} index={4} onClick={handleClick} />
            <Square value={boardData[5]} index={5} onClick={handleClick} />
        </div>
        <div className="board-row">
            <Square value={boardData[6]} index={6} onClick={handleClick} />
            <Square value={boardData[7]} index={7} onClick={handleClick} />
            <Square value={boardData[8]} index={8} onClick={handleClick} />
        </div>
        <div className="game-info">
            <ol>
                <li>
                    <button onClick={handleHistory}>dd</button>
                </li>
            </ol>
        </div>
        </>
    );
}

function Square({onClick, value, index}) {
    let valueText = '';
    if(value > 0) {
        valueText = value === 1 ? "X" : "O"
    }

    const squareClick = () => {
        if('' === valueText) {
            onClick(index)
        }
       
    }

    return <button className="square" onClick={squareClick}>{valueText}</button>
}


const checkWinner = (selectedBoard) => {
    const winLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
 // x플레이어의 데이터를 정리한다. 승리 조건과 값을 맞추기 위해 x 플레이어가 선택한 판만 인덱스 값으로 변경하고 나머지는 -1로
 const xSelectedList = selectedBoard.map((selected, index) => (selected == 1 ? index : -1));
 const oSelectedList = selectedBoard.map((selected, index) => (selected == 2 ? index : -1));

 // x가 승리했는지 확인한다. 승ㅇ리조건을 한 줄씩 추출하여, x플레이어의 데이터에 해당값들이 전부 존재하는지 확인한다.
 // 3개가 있으면 승리조건에 해당하므로 findIndex를 찾아낸다. 그 외에는 -1
 const isXWinner = winLines.findIndex((dataList) => {
   const isWinner = dataList.filter((data) => xSelectedList.includes(data));
   return isWinner.length === 3;
 });

 const isOWinner = winLines.findIndex((dataList) => {
   const isWinner = dataList.filter((data) => oSelectedList.includes(data));
   return isWinner.length === 3;
 });

 if(isXWinner >= 0) {
   return 1;
   // o 플레이어의 승리
 } else if (isOWinner >= 0) {
   return 2;
   // 승자 없음
 } else {
   return 0;
 }
}