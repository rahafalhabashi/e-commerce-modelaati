import React from 'react'
// import PropTypes from 'prop-types';
import ProductItem from './ProductItem';

function ProductsList({ products, cart, setCart }) {
    // console.log("hey")
    //loops through ProductItem component 
    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductItem
                    key={product.id}
                    product={product}
                    cart={cart}
                    setCart={setCart}
                />
            ))}
        </div>
    )
}
export default ProductsList