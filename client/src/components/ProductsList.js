import React from 'react'
import PropTypes from 'prop-types';
// import ProductItem from './ProductItem';

function ProductsList({ products }) {

    //loops through ProductItem component 
    return (
        <div>
            {/* {products.map((product) => (
                <ProductItem
                    key={product.id}
                    product={product}
                />
            ))} */}
        </div>
    )
}

ProductsList.propTypes = {
    products: PropTypes.array
}
export default ProductsList



// function ProductsList({ cart, setCart, items }) {
//     // const productsInCart = items.map(item =>(
//     //     <Item />
//     // ))

// return (
//     <div>
//         {/* {productsInCart} */}
//     </div>
// )
// }

// export default ProductsList