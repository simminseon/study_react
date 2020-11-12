import React from 'react';

export const Nav = ({props}) => {
    return (
    <div>
        <h2>Nav</h2>
        <div>
            <ul>
                {props.navList.map((val, idx) => {
                    return (
                        <li key={idx}>
                            <a onClick={linkTo.bind(this, val)}>{val}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    </div>
    );
}

function linkTo(val) {
    console.log(`click : ${val}`);
}
