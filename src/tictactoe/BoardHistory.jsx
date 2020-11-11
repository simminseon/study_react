import React from 'react';

function BoardHistory({boardHistory, onClick}) {
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