import React from 'react'
import { useNavigate } from 'react-router-dom'

function Product() {
    const navigate = useNavigate()

    function handleAddToCart() {
        navigate('/cart')
    }

    return (
        <div>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    )
}

export default Product