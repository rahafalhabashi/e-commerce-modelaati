import React from 'react'
// import StripeContainer from './StripeContainer'
// import StripeLogo from './stripe_button.png'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
// import StripeContainer from './StripeContainer'
// import { CardElement } from '@stripe/react-stripe-js'
// import {useHistory} from 'react-router-dom'
// import CardElement from './CardElement'

function Checkout({ cartProds }) {
  // <CardElement />
  const prodInCart = cartProds.map((product) => (
    <p> {product} </p>
  ))
  // const [product] = useState({
  //   name: prodInCart.name,
  //   price: prodInCart.amount ,
  //   description: prodInCart.description,
  // })

  function handleToken(token, addresses) {
    const response = axios.post('/checkout', { token, prodInCart })
    console.log(response.status)
  }

  return (
    <div>
      <div className="cards__item" align="center" style={{ width: 'auto', height: 'auto' }}>
        {/* <h1 className='payment-name'>Card</h1> */}
        <div className='payment-container' align='center' style={{ width: '600px', height: '100%' }} >
          <label htmlFor='card-element'>Card</label>
          <h4>Please enter the information below.</h4>
          <div>
            <StripeCheckout
              stripeKey="pk_test_51LA0u0KbdjY7fQwQpspCWOmeYN2eMh6gPyBaRbyVmdpTNVFWaYVsmGhedXhuu8kXxYTwikzH2WmE1iovEw06ZWoE005wG4jewt"
              token={handleToken}
              amount={prodInCart.price * 100}
              name={prodInCart.name}
              billingAddress
              shippingAddress 
              />
          </div>

          {/* <StripeContainer />
          <button><img alt='stripe logo' src={StripeLogo} width='200' height='100' /></button> */}

          {/* <CardElement /> */}
          {/* <span class="payment-errors"></span>

          <div class="form-row">
            <label>
              <span>Card Number</span>
              <input type="text" size="20" data-stripe="number" />
            </label>
          </div>

          <div className="form-row">
            <label>
              <span>CVC</span>
              <input type="text" size="4" data-stripe="cvc" />
            </label>
          </div>

          <div className="form-row">
            <div className='side-by-side'>
              <label>
                <span>Expiration(MM/YYYY)</span>
              </label>
              <input type="text" size="2" data-stripe="exp-month" className='card-form-expiration-button' />
              <p style={{ fontSize: 30 }}> /  </p>
              <input type="text" size="4" data-stripe="exp-year" className='card-form-expiration-button' />
            </div>

          </div>

          <button type="submit" className='form-button' align='center' >Submit Payment</button> */}

          {/* <button className='form-button' >Pay</button> */}
        </div>
      </div>
    </div>
  )
}

export default Checkout