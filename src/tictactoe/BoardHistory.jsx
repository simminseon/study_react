import React from 'react';

function BoardHistory({boardHistory, onClick}) {
    // 보드 히스토리를 순번대로 보여준다.
    // 선택된 히스토리 기준으로 보드 내역을 변경하는 함수 onClick 에 인덱스를 넣어준다.
    const boardList = boardHistory.map((board, index) => {
        const handleHistory = () => {
            onClick(index);
        };

        const buttonText = index ? `back to history => ${index}` : `Go to game start`;
        return (
            <li key={index}>
                <button onClick={handleHistory}>{buttonText}</button>
            </li>
        );
    })
   return <ol>{boardList}</ol>; 
}

export default BoardHistory;