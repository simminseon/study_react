import * as React from 'react';
import PropTypes from 'prop-types';

export function Player({ player, isWin }) {
  // 현재 플레이어를 기준으로 나타내서 승자일때는 표시 플레이어를 뒤바꾼다.
  const playerChecker = isWin ? 2 : 1;
  // 위에서 설정한 체커를 기준으로 플레이어를 표시
  const playerText = playerChecker === player ? "X" : "O";
  // 승자가 있을경우 텍스트 표시가 변경된다.
  const description = isWin ? "Winner" : "Next Player";
  const displayText = `${description} : ${playerText}`
  return <div>{displayText}</div>;
}

