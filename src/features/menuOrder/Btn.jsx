import * as React from "react";

export function Btn() {
    return (
        <div className="group_btn">
            <button type="submit" className="btn btn_order">주문</button>
            <button className="btn">취소</button>
        </div>
    );
}