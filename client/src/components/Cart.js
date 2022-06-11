import React from 'react'

function Cart({ cart, trigger, setTrigger, children }) {
  return (trigger) ? (
    <div className='popup'>
      <div className='popup-inner'>
      <button className='close-btn' onClick={() => setTrigger(false)}>Close</button>
      <div>
        {children}
        {/* {user.cart_products} */}
      </div>
      </div>
    </div>
  ) : <div></div>
}

export default Cart