import React from 'react'
// // import stripHtml from 'string-strip-html';
// import PropTypes from 'prop-types'
// import { useNavigate } from 'react-router-dom'
// import { Routes, Route } from 'react-router-dom'
// import Cart from './Cart'


function ProductItem({ user, product, cart, setCart }) {

    // const navigate = useNavigate()

    function handleAddToCart() {
   
        fetch("/cartorder", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product),
        })
            .then(resp => resp.json())
            .then(cart => {
                setCart(cart)
                // console.log(cart)
                // console.log(product)
                console.log(cart)
            })
    }
    return (
        <div className="cards__item">
            <div className='cards'>
                <img className="product__image" src={product.img_url} alt={product.name} />
                <div className="product__card">
                    <div className="product__info">
                        <h4 className="product__name">{product.name}</h4>
                        <p className="product__description">
                            {/* product description stripped of html tags */}
                            {/* {product.description} */}
                        </p>
                        <div className="product__details">
                            <p className="product__price">
                                ${product.price}
                            </p>
                            {/* {user ? */}
                            {/* <button onClick={() => navigate('/login')} style={{fontSize: '20px', fontColor: 'black', outline: 'black'}} >Please login to add to cart</button> */}
                            {/* : */}
                            <button  onClick={handleAddToCart} className={'form-button'}>Add to Cart  </button>
{/* } */}
                        </div>

                    </div>
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