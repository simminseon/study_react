import React from 'react';
import SquareBoard from './SquareBoard';
// import Player from './Player';
// import BoardHistory from './BoardHistory';
import './Tictactoe.css'

const initSquareList = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function Tictactoe() {
     // 현재 게임 카운트를 추적한다. 시작은 0
    const [count, setCount] = React.useState(0);
    // 현재 게임 보드 현황을 나타낸다. 1은 X, 2는 O, 0은 아직 두지 않은걸 의미한다.
    const [selectedBoard, setSelectedBoard] = React.useState(initSquareList);
    const wohIsWinner = checkWinner(selectedBoard);

    const handleSelectedBoard = (selectedIndex) => {
        if(wohIsWinner === 0) {
            setSelectedBoard((stateData) =>
                stateData.map((data, index) => {
                    if (index === selectedIndex) {
                        return (count % 2) + 1;
                    } else {
                        return data;
                    }
                })
            );
        }
        setCount((count) => count + 1);

    };

    return (
        <>
        {/* <Player /> */}
        <SquareBoard selectedBoard={selectedBoard} onClick={handleSelectedBoard} />
        {/* <BoardHistory /> */}
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