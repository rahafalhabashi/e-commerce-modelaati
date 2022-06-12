import React, { useEffect } from 'react'

function Cart({ cart, setCart, trigger, setTrigger, children }) {
  // useEffect(() => {
  //   fetch('/cart')
  //   .then(resp => resp.json())
  //   .then(cart => setCart(cart))
  // })



  return (trigger) ? (
    <div className='popup'>
      <div className='popup-inner'>
        <button className='close-btn' onClick={() => setTrigger(false)}>Close</button>
        <div>
          {cart.map(prod => { 
            <div>
              <img src={prod.img_url} alt={prod.name} ></img>
              <p>{prod.name}</p>
              <p>{prod.price}</p>

            </div>
          })}
          {/* {user.cart_products} */}
        </div>
      </div>
    </div>
  ) : <div></div>
}

export default Cart