import React from 'react';


function Square({onClick, value, index}) {
    // 버튼에 표시될 텍스트를 정리한다
    let valueText = '';
    if(value > 0) {
        valueText = value === 1 ? "X" : "O";
    }

    const handleClick = () => {
        // 값이 0일때만 넘어온 함수 onClick에 인덱스를 전달한다
        if('' === valueText) {
            onClick(index);
        }
    }

    return <button className="square" onClick={handleClick}>{valueText}</button>;
}

export default Square;