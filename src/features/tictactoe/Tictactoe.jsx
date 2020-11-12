import * as React from 'react';
import * as Redux from 'react-redux';

import './Tictactoe.css';

import { SquareBoard } from './SquareBoard';
import { BoardHistory } from './BoardHistory';
import { Player } from './Player';
import { tictactoeAction, tictactoeSelector } from './Tictactoe.slice';

// 게임 초기화 데이터. 모든 판은 0으로 설정된다.
const initSquareList = [0, 0, 0, 0, 0, 0, 0, 0, 0];

export function Tictactoe() {
  const dispatch = Redux.useDispatch();

  const stateSelector = Redux.useSelector(tictactoeSelector.stateSelector);

  console.log('tictactoeSelector', stateSelector);
  dispatch(tictactoeAction.resetPlay(initSquareList));
  // 현재 게임 카운트를 추적한다. 시작은 0
  const [count, setCount] = React.useState(0);
  // 현재 게임 보드 현황을 나타낸다. 1은 X, 2는 O, 0은 아직 두지 않은걸 의미한다.
  const [boardData, setBoardData] = React.useState(initSquareList);
  // 게임 기록을 나타낸다. 게임 보드 현황이 순서대로 통으로 기록되며, 초기값은 0으로 채워진 배열 1개다
  const [boardHistory, setBoardHistory] = React.useState([initSquareList]);

  // 승자가 있는지 체크한다. 0은 없음, 1은 X, 2는 O의 승리를 의미
  const whoIsWinner = checkWinner(boardData);
  // 현재 두어야 할 플레이어를 나타낸다. 게임 카운트를 2로 나눈 나머지에 1을 더한다.
  const player = (count % 2) + 1;
  // 현재 게임이 진행중인지 승자가 나왔는지 bool값으로 전환
  const isWin = whoIsWinner > 0;

  // 보드가 클릭이 됐을때 현재 보드값과 이력 갱신한다
  const handleSelectedBoard = (selectedIndex) => {
    // 승자가 없을때만 동작하도록 한다
    if (whoIsWinner === 0) {
      // 방금 선택된 인덱스를 기준으로 보드 현황값을 갱신한다
      const selectedBoardData = boardData.map((data, index) =>
        index === selectedIndex ? player : data,
      );
      // useState의 값에 설정
      setBoardData(selectedBoardData);
      // 현재 게임 카운트에서 1 증가시킨다
      setCount((count) => count + 1);
      // 추적 기능을 위해 선택된 시점 이후의 이력는 전부 삭제한다.
      const selectedHistoryData = boardHistory.filter((data, index) => index <= count);
      // 정리된 이력 + 최근 선택된 보드게임 판을 새로 설정해준다
      setBoardHistory([...selectedHistoryData, selectedBoardData]);
      dispatch(tictactoeAction.addPlay(selectedBoardData));
    }
  };

  // 이력 버튼을 클릭했을때 해당 이력대로 게임 현황을 변경한다
  const handleMoveHistory = (historyIndex) => {
    // 선택된 이력값을 추출한다.
    const selectedHistoryData = boardHistory.find((history, index) => index === historyIndex);
    dispatch(tictactoeAction.resetPlay(boardHistory));
    // 현재 보드 게임 상황판에 값을 변경한다.
    setBoardData(selectedHistoryData);
    // 추적 카운트를 이력의 인덱스 값으로 변경한다.
    setCount(historyIndex);
  };

  return (
    <div className="game">
      <div className="game-board">
        {/* 게임판 컴포넌트 */}
        <SquareBoard selectedBoard={boardData} onClick={handleSelectedBoard} />
      </div>
      <div className="game-info">
        {/* 플레이어 표시 컴포넌트 */}
        <Player player={player} isWin={isWin} />
        {/* 게임 이력을 나타내는 컴포넌트 */}
        <BoardHistory boardHistory={boardHistory} onClick={handleMoveHistory} />
      </div>
    </div>
  );
}

// 승리여부, 승자를 확인한다.
// 일반적인 알고리즘보다, 함수 학습의 효과를 높이기 위해 배열 함수로만 처리함.
const checkWinner = (selectedBoard) => {
  // 승리조건을 나타낸다.
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

  // x 플레이어의 데이터를 정리한다. 승리 조건과 값을 맞추기 위해 x 플레이어가 선택한 판만 인덱스 값으로 변경하고 나머지는 -1로
  const xSelectedList = selectedBoard.map((selected, index) => (selected === 1 ? index : -1));
  // o 플레이어의 데이터를 정리한다. 동일함
  const oSelectedList = selectedBoard.map((selected, index) => (selected === 2 ? index : -1));

  // x가 승리했는지 확인한다. 승리조건을 한 줄씩 추출하여, x플레이어의 데이터에 해당값들이 전부 존재하는지 확인한다.
  // 3개가 있으면 승리조건에 해당하므로 findIndex를 찾아낸다. 그 외에는 -1
  const isXWinner = winLines.findIndex((dataList) => {
    const isWinner = dataList.filter((data) => xSelectedList.includes(data));
    return isWinner.length === 3;
  });

  // o가 승리했는지 확인한다. 동일함
  const isOWinner = winLines.findIndex((dataList) => {
    const isWinner = dataList.filter((data) => oSelectedList.includes(data));
    return isWinner.length === 3;
  });

  // x플레이어의 승리
  if (isXWinner >= 0) {
    return 1;
    // o 플레이어의 승리
  } else if (isOWinner >= 0) {
    return 2;
    // 승자 없음
  } else {
    return 0;
  }
};
