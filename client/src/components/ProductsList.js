import React from 'react'
// import PropTypes from 'prop-types';
import ProductItem from './ProductItem';

function ProductsList({ products, cart }) {
    // console.log("hey")
    //loops through ProductItem component 
    return (
        <div>
            {products.map((product) => (
                <ProductItem
                    key={product.id}
                    product={product}
                    cart={cart}
                />
            ))}
        </div>
    )
}
export default ProductsList