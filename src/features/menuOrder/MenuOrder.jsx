import * as React from "react";
import { MenuBoard } from './MenuBoard';
import { OrderList } from './OrderList';
import { OrderStatus } from './OrderStatus';
// import { Btn } from './Btn';
import './menuOrder.css'
import { values } from "lodash";

const menuList = [
    {name: '메뉴1', price: 5000, stock: true},
    {name: '메뉴2', price: 3000, stock: true},
    {name: '메뉴3', price: 4000, stock: true},
    {name: '메뉴4', price: 4500, stock: false},
    {name: '메뉴5', price: 5000, stock: true},
    {name: '메뉴6', price: 5500, stock: false},
    {name: '메뉴7', price: 2500, stock: false},
    {name: '메뉴8', price: 7000, stock: true},
    {name: '메뉴9', price: 5500, stock: false},
    {name: '메뉴10', price: 5000, stock: true}
]

export function MenuOrder() {
    const [boardLow, setBoardLow] = React.useState([]);
    const [count, setCount] = React.useState(0);

    const boardData = menuList.map((menu, boardIndex) => {
        // console.log('menu',menu)
        const menuClick = () => {
            setBoardLow([...boardLow, menu])
            setCount((count) => count + 1);
            const same = boardLow.findIndex((elem, index) => {
               return index === boardIndex
            });
            console.log(same)
            
        }
       
        return <MenuBoard onClick={menuClick} menuName={menu.name} stock={menu.stock} />
    });
   
    return (
        <div className="menu_order">
            <div className="board_menu">
                {boardData}
                {/* <MenuBoard onClick={menuClick} menuList={menuList} /> */}
            </div>
            <div className="board_order">
                <OrderStatus />
                <table className="tbl_order">
                    <caption className="ir_caption">주문 내역</caption>
                    <colgroup>
                        <col style={{width:'160px'}} />
                        <col style={{width:'100px'}} />
                        <col style={{width:'180px'}} />
                    </colgroup>    
                    <thead>
                        <th scope="col">메뉴명</th>
                        <th scope="col">수량</th>
                        <th scope="col">금액</th>
                    </thead>
                    <tbody>
                        {boardLow.map(board => {
                            return (<Tr name={board.name} price={board.price} count={count} />)
                        })}
                    </tbody>
                </table>
                {/* <OrderList name={menuName} price={menuPrice} count={count} /> */}
                {/* <Btn /> */}
            </div>
        </div>
    );
}
function Tr({name, count, price}) {
    return(
        <tr>
            <td>{name}</td>
            <td>{count}</td>
            <td>{price}</td>
        </tr>
    );
}