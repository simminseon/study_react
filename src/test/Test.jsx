// import React from 'react';
import React, { useState } from 'react';

function Test() {
    const [toggle, setToggle] = useState(true);

    function handleClick() {
        const text = () => toggle ? console.log(true) : console.log(false);
        console.log(text)
    }
    return (
        <button onClick={handleClick}>
            {toggle}
        </button>
    );
}

export default Test;