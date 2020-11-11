import React from 'react';


function Square({onClick, value, index}) {
    let valueText = '';
    if(value > 0) {
        valueText = value === 1 ? "X" : "O";
    }

    const handleClick = () => {
        if('' === valueText) {
            onClick(index);
        }
    }

    return <button className="square" onClick={handleClick}>{valueText}</button>;
}

export default Square;