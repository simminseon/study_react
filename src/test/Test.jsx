// import React from 'react';
import React, { useState } from 'react';


// class Test extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {isToggleOn: true};
    
//         // 콜백에서 `this`가 작동하려면 아래와 같이 바인딩 해주어야 합니다.
//         this.handleClick = this.handleClick.bind(this);
//       }
    
//       handleClick() {
//         this.setState(state => ({
//           isToggleOn: !state.isToggleOn
//         }));
//       }
    
//       render() {
//         return (
//           <button onClick={this.handleClick}>
//             {this.state.isToggleOn ? 'ON' : 'OFF'}
//           </button>
//         );
//       }
// }

// function Test() {
//     const [toggleText, setToggleText] = useState(false);
//     const isToggleText = toggleText ? "OFF" : "ON"

//     function handleClick() {
//         setToggleText(!toggleText);
//     }

//     return (
//         <button onClick={handleClick}>
//             {isToggleText}
//         </button>
//     );
// }



// function Test() {
//     const [toggleText, setToggleText] = useState(false);
    
//     function handleClick() {
//         setToggleText(!toggleText);
//     }

//     return <TestButton event={handleClick} text={toggleText} /> 
// }

// function TestButton({event, text}) {
//     const isToggleText = text ? "OFF" : "ON";

//     return (
//         <button onClick={event}>
//             {isToggleText}
//         </button>
//     );
// }

// --------------------------------------------------------------

function Test() {
    const [textToggle, setTextToggle] = useState(false);
    const setExport = {onClick: handleClick, text: textToggle};
    
    function handleClick() {
        setTextToggle(!textToggle);
    }

    return <TestButton {...setExport} />
}

function TestButton({onClick, text}) {
    const isTextToggle = text ? "OFF" : "ON"
    return(
        <button text={isTextToggle} onClick={onClick}>
            {isTextToggle}
        </button>
    );
}

export default Test;