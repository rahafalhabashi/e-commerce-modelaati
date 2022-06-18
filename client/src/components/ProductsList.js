import React from 'react'
// import PropTypes from 'prop-types';
import ProductItem from './ProductItem';

function ProductsList({ user, products, cart, setCart, setCartProds, cartProds }) {
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
                    user={user}
                    setCartProds={setCartProds}
                    cartProds={cartProds}
                />
            ))}
        </div>
    )
}
export default ProductsList