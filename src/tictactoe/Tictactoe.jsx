import React from 'react';
import SquareBoard from './SquareBoard';
import Player from './Player';
import BoardHistory from './BoardHistory';
import './Tictactoe.css'

const initSquareList = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function Tictactoe() {
     // 현재 게임 카운트를 추적한다. 시작은 0
    const [count, setCount] = React.useState(0);
    // 현재 게임 보드 현황을 나타낸다. 1은 X, 2는 O, 0은 아직 두지 않은걸 의미한다.
    const [selectedBoard, setSelectedBoard] = React.useState(initSquareList);
    // 게임 기록을 나타낸다. 게임 보드 현황이 순서대로 통으로 기록되며, 초기값은 0으로 채워진 배열 1개다
    const [boardHistory, setBoardHistory] = React.useState([initSquareList]);
    // 승자가 있는지 체크한다. 0은 없음, 1은 X, 2는 O의 승리를 의미
    const whoIsWinner = checkWinner(selectedBoard);
    // 현재 두어야 할 플레이어를 나타낸다. 게임 카운트를 2로 나눈 나머지에 1을 더한다.
    const player = (count % 2) + 1;
    // 현재 게임이 진행중인지 승자가 나왔는지 bool값으로 전환
    const isWin = whoIsWinner > 0;


    const handleSelectedBoard = (selectedIndex) => {
        if(whoIsWinner === 0) {
            const selectedBoardData = selectedBoard.map((data, index) => {
                if (index === selectedIndex) {
                    return player;
                } else {
                    return data;
                }
            });
            setSelectedBoard(selectedBoardData);
            setCount((count) => count + 1);
            const selectedHistoryData = boardHistory.filter((data, index) => index <= count);
            setBoardHistory([...selectedHistoryData, selectedBoardData]);
        } 
    };

    const handleMoveHistory = (historyIndex) => {
        const selectedHistoryData = boardHistory.find((history, index) => index === historyIndex);
        setSelectedBoard(selectedHistoryData);
        setCount(historyIndex);
    }

    return (
        <>
        <Player player={player} isWin={isWin} />
        <SquareBoard selectedBoard={selectedBoard} onClick={handleSelectedBoard} />
        <BoardHistory boardHistory={boardHistory} onClick={handleMoveHistory} />
        </>
    )
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

    const xSelectedList = selectedBoard.map((selected, index) => (selected === 1 ? index : -1));
    const oSelectedList = selectedBoard.map((selected, index) => (selected === 2 ? index : -1));

    const isXWinner = winLines.findIndex((dataList) => {
        const isWinner = dataList.filter((data) => xSelectedList.includes(data));
        return isWinner.length === 3;
    });

    const isOWinner = winLines.findIndex((dataList) => {
        const isWinner = dataList.filter((data) => oSelectedList.includes(data));
        return isWinner.length === 3
    });

    if(isXWinner >= 0) {
        return 1;
    } else if(isOWinner >= 0) {
        return 2;
    } else {
        return 0;
    };
}

export default Tictactoe;