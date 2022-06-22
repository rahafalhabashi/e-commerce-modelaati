import React from 'react'
import { useNavigate } from 'react-router-dom'
// import Login from './Login'

function Cart({cart, cartProds, setCartProds, user, cartTotalPrice, setCartTotal }) {
  // const [showCart, setShowCart] = useState(false)
  // console.log(cart)
  let navigate = useNavigate()

  function handleCheckout() {
    navigate(`/checkout`)
    fetch(`/checkout`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({checked_out: false})
    })
    .then(res => res.json())
    .then(prod => console.log(prod))
    setCartProds([])
    setCartTotal(' ')
  }

  function handleDeleteProd(id) {
    fetch(`/cart_products.${id}`, {
      method: 'DELETE',
      header: {
        "Content-Type": "application/json"
      }
    })
      .then(() => onProdDelete(id))
  }

// console.log(cart)
  function onProdDelete(id) {
    const updatedProds = cartProds.filter(prod => (
      prod.id !== id
    ))
    setCartProds(updatedProds)
    // console.log()
  }



  // console.log(cartProds)

  return (
    <div>
      {user ?
        <div>
          <div>
            <h2 align="center" >Cart</h2>
            {cartProds.map((prod, idx) => (
              // <div className='cards__item'>
              <div className='cart-card' key={idx} >
                <img src={prod.img_url} alt={prod.name} className='cart-image' ></img>
                <p>{prod.name}</p>
                <p>${prod.price}</p>
                <button className='cart-card-button' align='center' style={{ width: 'auto' }} onClick={() => handleDeleteProd(prod.id)} >remove from cart</button>
                {/* <p>Total: {parseInt(prod.price, 10)}.sum}</p> */}
              </div>
              // </div>
            ))}
            <div align="center">
              <p> Total: ${cartTotalPrice}.00 </p>
              <button className="cart-card-button" align="center" onClick={handleCheckout} >Checkout</button>
            </div>
          </div>
        </div>
        :
        <div align="center">
          <h2 className="no-cart-text">Please login to view cart.</h2>
          <button className='form-button' onClick={() => navigate('/login')}>Login</button>
        </div>
      }
    </div>
  )
}

export default Cart