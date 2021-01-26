import * as React from "react";

export function OrderList({addClick, minusClick, menuData}) {
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
                    menu.count > 0 &&
                    <li key={menu.code}>
                        <div className="item item_menu">{menu.name}</div>
                        <div className="item item_quantity">{menu.count}</div>
                        <div className="item item_price">
                            {menu.price}
                            <div className="group_btn">
                                <button className="btn_quantity" onClick={() => minusClick(menu)}>-</button>
                                <button className="btn_quantity" onClick={() => addClick(menu)}>+</button>
                            </div>
                        </div>
                    </li>
                );
            })}
        </ul>
        </>
    );
}
