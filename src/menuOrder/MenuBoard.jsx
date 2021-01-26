import * as React from "react";

export function MenuBoard({onClick, menuList}) {
    return (
    <div className="board_menu">
        {menuList.map(menu => {
            if(menu.stock) {
                return <button className="btn_menu" key={menu.code} onClick={() => onClick(menu)}>{menu.name}</button>
            }
            return <button className="btn_menu" key={menu.code} disabled>{menu.name}</button>
        })}
    </div>
    );
}
