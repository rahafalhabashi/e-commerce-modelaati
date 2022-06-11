import React from 'react'
// // import stripHtml from 'string-strip-html';
// import PropTypes from 'prop-types'
// import { useNavigate } from 'react-router-dom'
// import { Routes, Route } from 'react-router-dom'
// import Cart from './Cart'


function ProductItem({ user, product, cart }) {
    // const navigate = useNavigate()

    const addProductToCart = {
        user_id: user.id,

    }

    function handleAddToCart() {
        fetch("/cart", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(addProductToCart),
        })
        .then(resp => resp.json())
        // navigate('/cart')
    }
    // console.log("hi")
    return (
        <div className="product__card">
            <img className="product__image" src={product.img_url} alt={product.name} />
            <div className="product__info">
                <h4 className="product__name">{product.name}</h4>
                <p className="product__description">
                    {/* product description stripped of html tags */}
                    {product.description}
                </p>
                <div className="product__details">
                    <p className="product__price">
                        {product.price}
                    </p>
                    {/* <Routes>
                    </Routes> */}

                    <button onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
// //validates props for type checking and debugging (installed prop-types for this)
// ProductItem.propTypes = {
//     product: PropTypes.object,
// };

export default ProductItem