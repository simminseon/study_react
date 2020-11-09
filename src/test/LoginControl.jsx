import React, { useState } from 'react';
import Greeting from './Greeting';

function LoginControl() {
    const [stateLog, setStateLog] = useState(false);
    let btn;
    const isLoggedIn = stateLog ? true : false;
    const handleLoginClick = () => {
        setStateLog(!stateLog);
    }

    const handleLogoutClick = () => {
        setStateLog(!stateLog);
    }

    if(stateLog){
        btn = <LoginButton onClick={handleLoginClick} name={stateLog} />
    } else {
        btn = <LoginButton onClick={handleLogoutClick} name={stateLog} />
    }

    return (
        <div>
        {btn}
        <Greeting stateLogin={isLoggedIn} />
        </div>
    )
}

function LoginButton({onClick, name}) {
    const IsText = name ? "Logout" : "Login";
    return <button onClick={onClick}>{IsText}</button>
}

export default LoginControl;