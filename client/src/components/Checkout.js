import React from 'react'
// import {useHistory} from 'react-router-dom'
import CardElement from './CardElement'

function Checkout() {
  return (
    <div>
        <h1>Card</h1>
        <form>
            <label htmlFor='card-element'>Card</label>
            <CardElement />

            <button>Pay</button>
        </form>
    </div>
  )
}

export default Checkout