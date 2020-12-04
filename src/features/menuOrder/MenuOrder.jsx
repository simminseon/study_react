import * as React from "react";
import {useEffect} from 'react'
import { MenuButton } from './MenuButton';
import { OrderList } from './OrderList';
import { OrderStatus } from './OrderStatus';
import { Btn } from './Btn';
import './menuOrder.css'
import { values } from "lodash";

const menuList = [
    {name: '메뉴1', code: 0, price: 5000, stock: true},
    {name: '메뉴2', code: 1, price: 3000, stock: true},
    {name: '메뉴3', code: 2, price: 4000, stock: true},
    {name: '메뉴4', code: 3, price: 4500, stock: false},
    {name: '메뉴5', code: 4, price: 5000, stock: true},
    {name: '메뉴6', code: 5, price: 5500, stock: false},
    {name: '메뉴7', code: 6, price: 2500, stock: false},
    {name: '메뉴8', code: 7, price: 7000, stock: true},
    {name: '메뉴9', code: 8, price: 5500, stock: false},
    {name: '메뉴10', code: 9, price: 5000, stock: true}
]

export function MenuOrder() {
    const [menuData, setMenuData] = React.useState([]);
    const [price, setPrice] = React.useState([]);
    const [menuCount, setMenuCount] = React.useState(0)

    useEffect(()=>{
        // console.log('sumPrice: ', sumPrice)
        // const test = sumPrice.reduce((pre, val) => pre + val)
        // console.log(test)
    },[])

    const menuClick = (menu) => {
        const orderedMenuData = {
            name: menu.name,
            code: menu.code,
            price: menu.price,
            count: 1
        }
        const existMenuData = menuData.find(data => data.code === orderedMenuData.code)
        if(existMenuData) {
            const checkedMenuData = menuData.map(data => {
                const addPrice = data.price * data.count;
                if(data.code === orderedMenuData.code) {
                    return {...data, count: data.count + 1, price:addPrice}
                } else {
                    return data
                }
                
            })
            setMenuData(checkedMenuData)
            // increase count
        } else {
            // add mneuData
            setMenuData([...menuData, orderedMenuData])
        }
        // console.log(orderedMenuData)
    }
    console.log("menuData: ", menuData)
    const sumPrice = price.reduce((pre, val) => {
        return pre + val
    }, 0);

    const boardData = menuList.map((menu) => {
        return <MenuButton onClick={()=>{menuClick(menu)}} menuName={menu.name} stock={menu.stock} />
    });
   
    return (
        <div className="menu_order">
            <div className="board_menu">
                {boardData}
                {/* <MenuBoard onClick={menuClick} menuList={menuList} /> */}
            </div>
            <div className="board_order">
                <OrderStatus sum={sumPrice} />
                <div className="head_order">
                    <div className="item item_menu">메뉴명</div>
                    <div className="item item_quantity">수량</div>
                    <div className="item item_price">금액</div>
                </div>
                <ul className="order_list">
                    {menuData.map(menu => {
                        return (
                        <li>
                            <div className="item item_menu">{menu.name}</div>
                            <div className="item item_quantity">{menu.count}</div>
                            <div className="item item_price">{menu.price}</div>
                        </li>
                        );
                    })}
                </ul>
                {/* <OrderList name={menuName} price={menuPrice} count={count} /> */}
                <Btn />
            </div>
        </div>
    );
}
