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

    // 보드가 클릭이 됐을때 현재 보드값과 이력 갱신한다
    const handleSelectedBoard = (selectedIndex) => {
        // 승자가 없을때만 동작하도록 한다
        if(whoIsWinner === 0) {
            // 방금 선택된 인덱스를 기준으로 보드 현황값을 갱신한다
            const selectedBoardData = selectedBoard.map((data, index) => {
                if (index === selectedIndex) {
                    return player;
                } else {
                    return data;
                }
            });
            // useState의 값에 설정
            setSelectedBoard(selectedBoardData);
            // 현재 게임 카운트에서 1 증가시킨다
            setCount((count) => count + 1);
            // 추적 기능을 위해 선택된 시점 이후의 이력는 전부 삭제한다.
            const selectedHistoryData = boardHistory.filter((data, index) => index <= count);
            // 정리된 이력 + 최근 선택된 보드게임 판을 새로 설정해준다
            setBoardHistory([...selectedHistoryData, selectedBoardData]);
        } 
    };

    // 이력 버튼을 클릭했을때 해당 이력대로 게임 현황을 변경한다
    const handleMoveHistory = (historyIndex) => {
        // 선택된 이력값을 추출한다.
        const selectedHistoryData = boardHistory.find((history, index) => index === historyIndex);
        // 현재 보드 게임 상황판에 값을 변경한다.
        setSelectedBoard(selectedHistoryData);
        // 추적 카운트를 이력의 인덱스 값으로 변경한다.
        setCount(historyIndex);
    }

    return (
        <>
        {/* 플레이어 표시 컴포넌트 */}
        <Player player={player} isWin={isWin} />
        {/* 게임판 컴포넌트 */}
        <SquareBoard selectedBoard={selectedBoard} onClick={handleSelectedBoard} />
        {/* 게임 이력을 나타내는 컴포넌트 */}
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