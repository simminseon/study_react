import * as React from "react";

export function OrderList({name, price, count}) {
    return (
        <table className="tbl_order">
            <caption className="ir_caption">주문 내역</caption>
            <colgroup>
                <col style={{width:'160px'}} />
                <col style={{width:'100px'}} />
                <col style={{width:'180px'}} />
            </colgroup>    
            <thead>
                <tr>
                    <th scope="col">메뉴명</th>
                    <th scope="col">수량</th>
                    <th scope="col">금액</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{name}</td>
                    <td>{count}</td>
                    <td>{price}</td>
                </tr>
            </tbody>
        </table>
    );
}