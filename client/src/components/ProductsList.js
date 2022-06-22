import React from 'react'
// import PropTypes from 'prop-types';
import ProductItem from './ProductItem';
import frontPic from './images/frontPic.png'

function ProductsList({ user, products, cart, setCart, setCartProds, cartProds }) {
    // console.log("hey")
    //loops through ProductItem component 
    return (
        <div>
            <div>
            <img src={frontPic} alt='sports home' className='front-pic' />
            </div>
            <div className="product-list">
                <h3 align="center">Newest Items</h3>
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
        </div>
    )
}
export default ProductsList