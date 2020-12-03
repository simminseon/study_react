import * as React from "react";

export function OrderStatus({sum}) {
    return (
        <div className="order_status">
            <span className="txt_order">주문금액 : </span>
            <span className="txt_price">{sum}</span>
        </div>
    );
}