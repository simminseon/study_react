import * as React from "react";

export function OrderList({onClick, menuData, sumPrice}) {
    return (
        <>
        <div className="head_order">
            <div className="item item_menu">메뉴명</div>
            <div className="item item_quantity">수량</div>
            <div className="item item_price">금액</div>
        </div>
        <ul className="order_list">
            {menuData.map(menu => {
                return (
                <li key={menu.code}>
                    <div className="item item_menu">{menu.name}</div>
                    <div className="item item_quantity">{menu.count}</div>
                    <div className="item item_price">
                        {sumPrice}
                        <button onClick={() => onClick(menu)}>+</button>
                        {/* {minusButton}{plusButton} */}
                    </div>
                </li>
                );
            })}
        </ul>
        </>
    );
}