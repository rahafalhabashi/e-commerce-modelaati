// import React from 'react'
// // import stripHtml from 'string-strip-html';
// import PropTypes from 'prop-types'

// function ProductItem({ product }) {
//     // const { result } = stripHtml(product.description)
//     // const checAPIKey = process.env.REACT_APP_CHEC_PUBLIC_KEY;

//     return (
//         <div className="product__card">
//             <img className="product__image" src={product.image?.url} alt={product.name} />
//             <div className="product__info">
//                 <h4 className="product__name">{product.name}</h4>
//                 <p className="product__description">
//                     {/* product description stripped of html tags */}
//                     {product.description}
//                 </p>
//                 <div className="product__details">
//                     <p className="product__price">
//                         {product.price.formatted_with_symbol}
//                     </p>
//                 </div>
//             </div>
//         </div>)
// }
// //validates props for type checking and debugging (installed prop-types for this)
// ProductItem.propTypes = {
//     product: PropTypes.object,
// };

// export default ProductItem