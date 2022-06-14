import React from 'react'
import { useNavigate } from 'react-router-dom'

function Cart({ cart, setCart, trigger, setTrigger, prod }) {
  let navigate = useNavigate()
  

  function handleCheckout() {
    navigate('/checkout')
  }

  console.log(prod)

  return (
    <div>
      <div >
        <p>hi</p>
        <div>
          <img src={prod.img_url} alt={prod.name} ></img>
          </div>
          <div>
          <p>{prod.name}</p>
          <p>${prod.price}</p>
        </div>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  )
}

export default Cart