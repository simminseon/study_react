import * as React from "react";
import { MenuBoard } from './MenuBoard';
import { OrderList } from './OrderList';
import { OrderStatus } from './OrderStatus';
import { OrderBtn } from './OrderBtn';
import './menuOrder.css'

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
    const menuClick = (menu) => {

        const orderedMenuData = {
            name: menu.name,
            code: menu.code,
            price: menu.price,
            count: 1, 
            sumPrice : menu.price
        }
        
        const existMenuData = menuData.find(data => data.code === orderedMenuData.code)
        if(existMenuData) {
            const checkedMenuData = menuData.map(data => {
                const addPrice = orderedMenuData.sumPrice + data.sumPrice;

                if(data.code === orderedMenuData.code) {
                    return {...data, count: data.count + 1, sumPrice:addPrice}
                } else {
                    return data
                }
            })
            setMenuData(checkedMenuData)
            // increase count
        } else {
            // add menuData
            setMenuData([...menuData, orderedMenuData])
        }
    }

    console.log("menuData: ", menuData)
    // 선택된 메뉴의 금액 데이터
    const selectedSumPriceData = menuData.map(data => data.sumPrice)
    // 총 금액 계산
    const resultPrice = selectedSumPriceData.reduce((pre, val) => {
        return pre + val
    }, 0);

    // count up
    const addClick = (menu) => {
        menu.count += 1;
        menu.sumPrice = menu.sumPrice + menu.price
        const selectedMenu = menuData.map(data => {
            return {...data}
        })
        setMenuData(selectedMenu)
    } 
    // count down
    const minusClick = (menu) => {
        menu.count -= 1;
        menu.sumPrice = menu.sumPrice - menu.price
        const selectedMenu = menuData.map(data => {
            return {...data}
        })
        setMenuData(selectedMenu)
    } 
    return (
        <div className="menu_order">
            <MenuBoard menuList={menuList} onClick={menuClick} />
            <OrderStatus resultPrice={resultPrice} />
            <OrderList addClick={addClick} minusClick={minusClick} menuData={menuData} />
            <OrderBtn />
        </div>
    );
}
