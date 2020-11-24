import React from 'react'

const PRODUCTS = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
]

function SearchBar ({ filterText, inStockOnly, onFilterTextChange, onInStockChange }) {
    const handleFilterTextChange = (e) => {
        onFilterTextChange(e.target.value);
    }
    const handleInstockChange = (e) => {
        onInStockChange(e.target.checked)
    }
    return (
        <>
        <input type="text" placeholder="Search..." value={filterText} onChange={handleFilterTextChange} /><br />
        <input type="checkbox" id="inpCheck" checked={inStockOnly} onChange={handleInstockChange} />
        <label for="inpCheck">Only show products in stock</label>
        </>
    )
}

function ProductTable ({products, filterText, inStockOnly}) {
    const row = [];
    let lastCategory = null;

    products.forEach((product) => {
        if(product.name.indexOf(filterText) === -1) {
            return;
        }
        if(inStockOnly && !product.stocked) {
            return;
        }
        if(product.category !== lastCategory) {
            row.push(
                <ProductCategoryRow category={product.category} />
            )
        }
        row.push(
            <ProductRow product={product} key={product.name} />
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

function ProductCategoryRow ({category}) {
    return (
        <tr>
            <th scope="col" colSpan="2">{category}</th>
        </tr>
    );
}

function ProductRow ({product}) {
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
    const [filterText, setFilterText] = React.useState('');
    const [inStockOnly, setInStockOnly] = React.useState(false);

    const handleFilterTextChange = (filterText) => {
        setFilterText(filterText);
    }
    const handleInstockChange = (inStockOnly) => {
        setInStockOnly(inStockOnly);
    }
    return (
        <div className="wrap_product">
            <SearchBar 
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange={handleFilterTextChange} 
                onInStockChange={handleInstockChange} 
            />
            <ProductTable 
                products={PRODUCTS}
                filterText={filterText}
                inStockOnly={inStockOnly}
            />
        </div>
    )
}