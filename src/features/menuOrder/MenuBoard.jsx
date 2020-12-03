import { values } from "lodash";
import * as React from "react";

export function MenuBoard({onClick, menuName, stock}) {
    if(stock) {
        return (<button className="btn_menu" key={menuName} onClick={onClick}>{menuName}</button>)
    } 
    return (<button className="btn_menu" key={menuName} onClick={onClick} disabled>{menuName}</button>)
}