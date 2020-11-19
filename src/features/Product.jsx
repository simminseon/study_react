import React from 'react'

const PRODUCTS = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
]

const SearchBar = () => {
    return (
        <div>searchbar</div>
    )
}

const ProductTable = ({products}) => {
    const row = [];
    let lastCategory = null;

    products.forEach((product) => {
        if(product.category !== lastCategory) {
            row.push(
                <ProductCategoryRow category={product.category} />
            )
        }
        row.push(
            <ProductRow product={product} />
        );
        lastCategory = product.category;
    })
    return (
        <table className="tbl_product">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>{row}</tbody>
        </table>
    )
}

const ProductCategoryRow = ({category}) => {
    return (
        <tr>
            <th scope="col" colSpan="2">{category}</th>
        </tr>
    );
}

const ProductRow = ({product}) => {
    const name = product.stocked ? 
        product.name : 
        <span style={{color:"red"}}>
            {product.name}
        </span>
    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    );

}
export function Product() {
    return (
        <div className="wrap_product">
            <SearchBar />
            <ProductTable products={PRODUCTS} />
        </div>
    )
}