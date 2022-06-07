import React from 'react'
import Item from ''

function ProductContainer({ cart, setCart, items }) {
    const productsInCart = items.map(item =>(
        <Item />
    ))

return (
    <div>
        {productsInCart}
    </div>
)
}

export default ProductContainer