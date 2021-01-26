import * as React from "react";

export function OrderStatus({resultPrice}) {
    return (
        <div className="order_status">
            <span className="txt_order">주문금액 : </span>
            <span className="txt_price">{resultPrice}</span>
        </div>
    );
}