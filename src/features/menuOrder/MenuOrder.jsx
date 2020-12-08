import * as React from "react";
import { MenuBoard } from './MenuBoard';
import { OrderList } from './OrderList';
import { OrderStatus } from './OrderStatus';
import { Btn } from './Btn';
import './menuOrder.css'
import { size, values } from "lodash";

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
    const [selectedPrice, setSelectedPrice] = React.useState([]);
    const [test, setTest] = React.useState(0);
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
                const addPrice = orderedMenuData.price + data.price;

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
        
        const priceData = menuData.map(data => data.price)
        setSelectedPrice([...priceData, orderedMenuData.price])
    }

    console.log("menuData: ", menuData)
    const sumPrice = selectedPrice.reduce((pre, val) => {
        return pre + val
    }, 0);

    const addClick = (menu) => {
        

        // sum.unshift(menu.price)
        menu.count += 1;
        
        // menu.price = test;
        // menu.price = menu.price * menu.count;
        // menu.price = selectedPrice;
        // menu.price = priceAdd(menu.price)
        // menu.price = priceAdd.price + priceAdd.price;
        const selectedMenu = menuData.map(data => {
            return {...data, test}
        })
        setTest(menu.price * menu.count)
        setMenuData(selectedMenu)
        console.log("test: ", menu)
        console.log('menu.price: ',test)
        
    } 
    return (
        <div className="menu_order">
            <MenuBoard menuList={menuList} onClick={menuClick} />
            <div className="board_order">
                <OrderStatus sum={sumPrice} />
                <OrderList menuData={menuData} onClick={addClick} sumPrice={test} />
                <Btn />
            </div>
        </div>
    );
}
