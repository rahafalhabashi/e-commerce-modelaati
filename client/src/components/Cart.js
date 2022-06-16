import React from 'react'
import { useNavigate } from 'react-router-dom'
// import Login from './Login'

function Cart({ cart, setCart, cartProds, setCartProds, user }) {
  // const [showCart, setShowCart] = useState(false)
  let navigate = useNavigate()


  function handleCheckout() {
    navigate('/checkout')
  }

  function handleDeleteProd(id) {
    fetch(`/cart_products/${id}`, {
      method: 'DELETE',
      header: {
        "Content-Type": "application/json"
      }
    })
      // .then(resp => console.log(resp.json()))
      .then(() => onProdDelete(id))
  }

  function onProdDelete(id) {
    const updatedProds = cartProds.filter(prod => (
      prod.id !== id
    ))
    setCartProds(updatedProds)
    console.log()
  }



  console.log(cartProds)

  return (
    <div>
      {user ?
        <div>
          <div>
            <h2 align="center" >Cart</h2>
            {cartProds.map((prod, id) => (
              // <div className='cards__item'>
              <div className='cart-card' >
                <img src={prod.img_url} alt={prod.name} key={prod.id} className='cart-image' ></img>
                <p>{prod.name}</p>
                <p>${prod.price}</p>
                <button className='cart-card-button' align='center' style={{ width: 'auto' }} onClick={() => handleDeleteProd(prod.id)} >remove from cart</button>
                {/* <p>Total: {parseInt(prod.price, 10)}.sum}</p> */}
              </div>
              // </div>
            ))}
            <button className="cart-card-button" align="center" onClick={handleCheckout} >Checkout</button>
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