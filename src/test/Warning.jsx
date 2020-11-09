import React, { useState } from 'react'

function Warning() {
    const [stateWarning, setStateWarning] = useState(true);
    const handleClick = () => {
        setStateWarning(!stateWarning);
    }

    return (
        <div className="area_warning">
            <WarningBanner bannerUse={stateWarning} />
            <WarningBtn btnText={stateWarning} onClick={handleClick} />
        </div>
    )
}

function WarningBanner({bannerUse}) {
    if(!bannerUse) {
        return null;
    }

    return (
        <div className="warning">Warning!</div>
    )
        
}

function WarningBtn({btnText, onClick}) {
    const textBtn = btnText ? "HIDE" : "SHOW";
    return <button className="btn_warning" onClick={onClick}>{textBtn}</button>
}

export default Warning;