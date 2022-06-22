import React, { useState } from 'react'
// // import stripHtml from 'string-strip-html';
// import PropTypes from 'prop-types'
// import { useNavigate } from 'react-router-dom'
// import { Routes, Route } from 'react-router-dom'
// import Cart from './Cart'


function ProductItem({ user, product, setCart, setCartProds }) {
    const [addedToCart, setAddedToCart] = useState(false)
    const [disable, setDisable] = useState(false)

    // const navigate = useNavigate()
    // console.log(product)
    function handleAddToCart() {
        // console.log(user)
        if (user) {
            fetch("/cartorder", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(product),
            })
                .then(resp => resp.json())
                .then(cart => {
                    setCartProds(cart)
                    // console.log(cart)
                    // console.log(product)
                    console.log(cart)
                    setAddedToCart(true)
                    setDisable(true)
                })
        }
        else {
            return "Please login to add to cart."
        }
    }
    return (
        <div className="cards__item">
            <div className='cards'>
                {/* <div className="product__card"> */}
                <img className="product__image" src={product.img_url} alt={product.name} />
                    <div className="product__info">
                        <h4 className="product__name">{product.name}</h4>
                        <p className="product__description">
                            {/* product description stripped of html tags */}
                            {/* {product.description} */}
                        </p>
                        {/* <div className="product__details"> */}
                            <p className="product__price">
                                ${product.price}
                            </p>
                            { addedToCart ?
                            <button disabled={disable} className={'form-button-disabled'} >Added to Cart</button>
                            :
                            <button onClick={handleAddToCart} className={'form-button'} >Add to Cart</button>
}
                        {/* </div> */}
                    </div>
                {/* </div> */}
            </div>
        </div>
    )
}
// //validates props for type checking and debugging (installed prop-types for this)
// ProductItem.propTypes = {
//     product: PropTypes.object,
// };

export default ProductItem